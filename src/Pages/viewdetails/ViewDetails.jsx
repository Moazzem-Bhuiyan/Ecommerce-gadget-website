import { Rating } from "@mui/material";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idnt = parseInt(id);
  const data = details.find((data) => data.id === idnt);

  const [count, setCount] = useState(0);

  return (
    <div className=" w-[80%] m-auto my-20">
      <div className=" grid gap-5 grid-cols-2">
        <div className="bg-slate-50">
          <img className="w-80 m-auto" src={data.img} alt="" />
        </div>

        <div className="">
          <h1 className="text-4xl font-bold ">{data.title}</h1>
          <p className="text-red-500 my-5 text-2xl">${data.price}</p>
          <Rating
            name="simple-controlled"
            value={data.rating}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <hr />

          <div className="mt-10 text-2xl flex gap-10 ">
           <div> <button
              className="border-l-2 rounded-md p-1 border-red-500 hover:bg-red-500"
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
            >
              -
            </button>{" "}
            {count}{" "}
            <button
              className="border-r-2 border-red-500 rounded-md p-1 hover:bg-red-500"
              onClick={() => setCount(count + 1)}
            >
              +
            </button></div>

            <button className="text-lg bg-red-500 text-white px-4 rounded-md">Buy now</button>

            <button><FaHeart className=""></FaHeart></button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
