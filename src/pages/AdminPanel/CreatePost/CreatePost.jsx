import React from "react";
import "./CreatePost.scss";
import AdminNav from "../AdminNav";
import { useDispatch } from "react-redux";
import { createDevice } from "../../../redux/postSlice";

const CreatePost = () => {
  const dispatch = useDispatch();

  const payload = (e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      image: e.target[1].value,
      price: e.target[2].value,
      desc: e.target[3].value,
      category: e.target[4].value,
    };
    dispatch(createDevice(data));
  };

  return (
    <>
      <AdminNav />
      <div className="container admincon">
        <div className="example">
          <form onSubmit={payload} className="create-post">
            <input className="inp" type="text" placeholder="Device..." />
            <input className="inp" type="text" placeholder="URL image..." />
            <input className="inpAdmin" type="text" placeholder="Price..." />
            <input type="text" placeholder="Description..." />
            <input type="text" placeholder="Category..." />
            <div className="postBtn-div">
              <input className="postBtn" type="submit" value={"Create"} />
            </div>
          </form>
          <div className="asThis">
            <h2>Category</h2>
            <img
              src="https://via.placeholder.com/600/24f355"
              alt="ExamplePhoto..."
            />
            <h3 style={{ paddingTop: "8px" }}>Device name</h3>
            <br />
            <h3>Price</h3>
            <br />
            <h4>Description</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
