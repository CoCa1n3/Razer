import React, { useEffect } from "react";
import "./AxiosPages.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../redux/deviceSlice";
import PageNotFound from "../../pnf/PageNotFound";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { deleteDeviceById } from "../../redux/deleteSlice";

const AxiosPages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

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

  const newGear = devices.filter((el) => el.category === "Gear");

  const newMobile = devices.filter((el) => el.category === "Mobile");

  const newStreaming = devices.filter((el) => el.category === "Streaming");

  return (
    <>
      <div className="containerAdmin">
        <div className="adminGrid">
          <div className="get-device">
            <h1>MICE</h1>
            <div className="get-razer">
              {newMice?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Keyboards</h1>
            <div className="get-razer">
              {newKeyboards?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Headsets</h1>
            <div className="get-razer">
              {newHeadsets?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Chairs</h1>
            <div className="get-razer">
              {newChairs?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Mobile</h1>
            <div className="get-razer">
              {newMobile?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Streaming</h1>
            <div className="get-razer">
              {newStreaming?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Laptop</h1>
            <div className="get-razer">
              {newLaptop?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Console</h1>
            <div className="get-razer">
              {newConsole?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="get-device">
            <h1>Gear</h1>
            <div className="get-razer ">
              {newGear?.map((el) => {
                return (
                  <div className="admin-razer" key={el._id}>
                    <h6>{el.category}</h6>
                    <img src={el.image} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p className="price">{el.price}$</p>
                    <p className="desc" style={{ fontSize: "10px" }}>
                      {el.desc}
                    </p>
                    <button
                      onClick={() => {
                        dispatch(deleteDeviceById(el._id));
                      }}
                      type="button"
                      className="removeBtn"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosPages;
