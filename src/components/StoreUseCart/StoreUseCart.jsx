import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../redux/deviceSlice";
import "./storeUseCart.scss";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import PageNotFound from "../../pnf/PageNotFound";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavContext } from "../../favContent";

const StoreUseCart = () => {
  const { addItem, getItem, removeItem } = useCart();

  const { handleAddToFav, fav } = useContext(FavContext);

  const dispatch = useDispatch();
  const { devices, status } = useSelector((state) => state.deviceSlice);
  useEffect(() => {
    dispatch(fetchDevices());
  }, []);

  if (status === "begin") {
    return <Loading />;
  }
  if (status === "error") {
    return <PageNotFound />;
  }

  const newMice = devices.filter((el) => el.category === "MICE");

  const newKeyboards = devices.filter((el) => el.category === "Keyboards");

  const newHeadsets = devices.filter((el) => el.category === "Headsets");

  const newChairs = devices.filter((el) => el.category === "Chairs");

  const newLaptop = devices.filter((el) => el.category === "Laptop");

  const newConsole = devices.filter((el) => el.category === "Console");

  const newMobile = devices.filter((el) => el.category === "Mobile");

  const newGear = devices.filter((el) => el.category === "Gear");

  const newStreaming = devices.filter((el) => el.category === "Streaming");

  return (
    <>
      <div className="containerStore container">
        <h1 id="mice" className="category">
          MICE BY RAZER
        </h1>
        <div className="mice-parent">
          {newMice?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="keyboards" className="category">
          KEYBOARDS BY RAZER
        </h1>
        <div className="mice-parent">
          {newKeyboards?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="headsets" className="category">
          HEADSETS BY RAZER
        </h1>
        <div className="mice-parent">
          {newHeadsets?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="streaming" className="category">
          STREAMING DEVICES BY RAZER
        </h1>
        <div className="mice-parent">
          {newStreaming?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="chairs" className="category">
          CHAIRS BY RAZER
        </h1>
        <div className="mice-parent">
          {newChairs?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="laptop" className="category">
          LAPTOPS BY RAZER
        </h1>
        <div className="mice-parent">
          {newLaptop?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="console" className="category">
          CONSOLE BY RAZER
        </h1>
        <div className="mice-parent">
          {newConsole?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="mobile" className="category">
          MOBILES BY RAZER
        </h1>
        <div className="mice-parent">
          {newMobile?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h1 id="gear" className="category">
          GEAR BY RAZER
        </h1>
        <div className="mice-parent">
          {newGear?.map((el) => {
            const isExists = fav.find((itm) => itm._id === el._id);
            return (
              <div key={el._id}>
                <div className="mice-children" key={el.id}>
                  <FaRegHeart
                    onClick={() => handleAddToFav(el)}
                    className={
                      isExists ? "card__heart_icon__active" : "card__heart_icon"
                    }
                  />
                  <img src={el.image} alt={el.name} />
                  <div className="mice-body">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <div className="mice-footer">
                      <h5>US${el.price}</h5>
                      {!getItem(el._id) ? (
                        <button onClick={() => addItem({ ...el, id: el._id })}>
                          BUY
                        </button>
                      ) : (
                        <button
                          className="cancelBtn"
                          onClick={() => removeItem(el._id)}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StoreUseCart;
