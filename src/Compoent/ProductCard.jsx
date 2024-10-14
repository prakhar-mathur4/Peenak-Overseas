import React from "react";
import { NavLink } from "react-router-dom";
import data from "../Data/Product";

const ProductCard = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((d) => (
        <div key={d.id} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <img
            src={d.imageUrls[0]}
            alt={d.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <div className="text-center">
            <h2 className="text-lg font-semibold">{d.name}</h2>
            {/* <p className="text-gray-600 mb-2">{d.description}</p> */}
            <p className="text-gray-800 ">MRP: Rs.{d.price["500ML"]}/-</p>
            <NavLink
              to={`/products/${d.id}`}
              className=" font-bold py-2 px-4 rounded mt-4"
            >
              Know More
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
