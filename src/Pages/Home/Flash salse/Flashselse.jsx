import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useData from "../../../Hooks/useData";
import { FaRegHeart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";


const Flashselse = () => {
  const { product } = useData();

  return (
    <div>
      <section>
        <SectionTitle subtitle={"Today's"} title={"Flash Sales"}></SectionTitle>
      </section>

      <div className="grid md:grid-cols-4 p-5 md:p-0 gap-5 my-10 relative">

        {product.slice(0, 4).map((item) => (
         <Link to ={`/viewdetails/${item.id}`}> <div className="  rounded-md ">
         <div className="w-full  bg-slate-50 ">  <img className="h-52 p-5 md:w-[80%] m-auto  " src={item.img} alt="" /></div>
           <h1 className="text-xl font-bold my-4">{item.title}</h1>
           <h1 className="text-red-500 mb-5 text-lg font-semibold">${item.price}</h1>
           
       
           <Rating
             name="simple-controlled"
             value={item.rating}
             onChange={(event, newValue) => {
               setValue(newValue);
             }}
           />
         </div></Link>
        ))}
        
      </div>

      <div className="flex justify-center my-5 ">
        {" "}
        <button className="bg-red-400 px-8 py-1 text-white rounded-md">
          View All Products
        </button>{" "}
      </div>
    </div>
  );
};

export default Flashselse;
