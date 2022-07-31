import React from "react";

const ShowcaseCard = ({ Heading, Description, Image }) => {
  return (
    <div
      id="card"
      className="duration-300 shadow-xl card rounded-2xl hover:shadow-md group"
    >
      <img
        className="w-1/2 mx-auto duration-300 ease-in-out group-hover:scale-105"
        src={Image}
        alt=""
      />
      <p className="mt-5 mb-2 text-5xl font-bold duration-300 group-hover:scale-110 group-hover:-translate-y-2 ease-in-outtext-gray-800 ">
        {Heading}
      </p>
      <p className="mb-5 text-2xl text-gray-500">{Description}</p>
    </div>
  );
};

export default ShowcaseCard;