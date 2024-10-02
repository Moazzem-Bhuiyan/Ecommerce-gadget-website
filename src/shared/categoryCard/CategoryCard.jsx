
import React from "react";
import { Link } from "react-router-dom";


const CategoryCard = ({ item }) => {
  const { img, title, price, rating,id } = item;

  return (
    <>
      <div>

      <Link to ={`/viewdetails/${id}`}>
      <div className="   rounded-md p-10">
          <div className="bg-slate-50">
            {" "}
            <img className="h-48 w-50 m-auto" src={img} alt="" />
          </div>
          <h1 className="font-bold text-xl my-5">{title}</h1>
          <h1 className="text-red-500 font-semibold">${price}</h1>

          <div className=" flex justify-center mt-10">
            <button className="bg-black px-10 py-1 rounded-sm text-white">
              Add To Cart
            </button>
          </div>
        </div>
      
      
      </Link>

      </div>

    </>
  );
};

export default CategoryCard;
