import React, { useEffect } from "react";
import "../pages/useCart.scss";
import { useCart } from "react-use-cart";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const StoreCard = () => {
  useEffect(() => {
    document.title = `Razer United States | Order `;
  }, []);

  const { items, isEmpty, updateItemQuantity, removeItem, emptyCart } =
    useCart();

  let total = 0;

  const postTest = () => {
    axios
      .post(
        `https://api.telegram.org/bot7590455402:AAG_YFdXHZcsBD4wV41xIMrtcTYx_yfKWjc/sendMessage?chat_id=-4775727901&text=${encodeURIComponent(
          `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>Our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>
    
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.count} x ${item.price} $ = ${item.count} 
    `;
  })
  .join("")}        
<b>Total:</b> ${total} $`
        )}&parse_mode=html`
      )
      .then(() => {
        emptyCart();
        window.location.reload();
      });
  };

  return (
    <>
      <Navbar />
      <div className="prices-parent">
        <div className="container cart-container">
          {isEmpty ? (
            <div className="boxFather">
              <div className="epmty">
                <h1 className="ttt">Cart is Empty</h1>
              </div>
            </div>
          ) : (
            <>
              <ul className="cart-main-texts">
                <li>Devices</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
              {items?.map((item) => {
                const priceCount = item.count * item.price;
                total += priceCount;

                if (item.count >= 1) {
                  return (
                    <div className="container" key={item.id}>
                      <ul className="prices">
                        <li className="nameImg">
                          <h5>{item.name}</h5>
                          <img src={item.image} alt={item.name} />
                        </li>
                        <li className="pricecount">
                          <h3>{priceCount}$</h3>
                        </li>
                        <li className="countid">
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.count - 1)
                            }
                          >
                            -
                          </button>
                          <h3>{item.count}</h3>
                          <button
                            onClick={() =>
                              updateItemQuantity(item.id, item.count + 1)
                            }
                          >
                            +
                          </button>
                        </li>
                        <li className="deleteIconDiv">
                          <svg
                            onClick={() => {
                              removeItem(item.id);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path
                              fillRule="evenodd"
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            />
                          </svg>
                        </li>
                      </ul>
                    </div>
                  );
                } else {
                  removeItem(item.id);
                }
              })}
              <div className="allPrices">
                <h1>Cart Totals</h1>
                <div className="twink">
                  <h2>Total:</h2>
                  <h2>{total}$</h2>
                  <button onClick={postTest}>Order</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StoreCard;
