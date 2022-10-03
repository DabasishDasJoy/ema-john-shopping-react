import React from "react";
import img from "../../images/giphy.gif";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-5xl text-center font-medium">
        Welcome to Ema John Shop
      </h1>
      <img
        src={img}
        alt="a boy showing thumb gif"
        className="m-auto object-scale-down"
      />
    </div>
  );
};

export default Home;
