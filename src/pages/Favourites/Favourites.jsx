import React from "react";
import "../Favourites/favourites.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FavContext } from "../../favContent";

const Favourites = () => {
  const navigate = useNavigate();
  const { fav, handleAddToFav } = useContext(FavContext);
  return (
    <>
      <Navbar />
      <div className="container containerStore">
        {fav.length ? (
          <>
            <h1 id="mice" className="category">
              FAVOURITES BY RAZER
            </h1>
            <div className="mice-parent">
              {fav?.map((el) => {
                const isExists = fav.find((itm) => itm._id === el._id);
                return (
                  <div key={el._id}>
                    <div className="mice-children" key={el.id}>
                      <FaRegHeart
                        onClick={() => handleAddToFav(el)}
                        className={
                          isExists
                            ? "card__heart_icon__active"
                            : "card__heart_icon"
                        }
                      />
                      <img src={el.image} alt={el.name} />
                      <div className="mice-body">
                        <h3>{el.name}</h3>
                        {el?.desc.length > 100 ? (
                          <p>
                            {el.desc.slice(0, 100)}
                            {"..."}
                          </p>
                        ) : (
                          <p>{el.desc}</p>
                        )}
                        <div className="mice-footer">
                          <h5>US${el.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="favourites__main">
            <div className="favourites__main__box">
              <FaRegHeart className="favourites__main__box__icon" />
              <h1 className="favourites__main__box__title">
                IT'S STILL EMPTY HERE
              </h1>
              <p className="favourites__main__box__desc">
                You haven't added anything to your favorites yet
              </p>
              <button
                className="favourites__main__box__button"
                onClick={() => navigate("/store")}
              >
                GO TO STORE
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
