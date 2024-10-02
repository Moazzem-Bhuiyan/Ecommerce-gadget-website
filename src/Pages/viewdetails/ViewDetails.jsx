import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import usecarts from "../../Hooks/usecarts";

const ViewDetails = () => {

  const [cart,refetch]=usecarts();

  const navigate = useNavigate();
  const {user} = useContext(Authcontext)

  const details = useLoaderData();
  const { id } = useParams();
  const idnt = parseInt(id);
  const data = details.find((data) => data.id === idnt);
  const [count, setCount] = useState(0);

  const handleAddtocart = (food) => {
    console.log(food,user);
    const cartItem ={
      menuId : data._id,
      email: user.email,
      title : data.title,
     img : data.img,
     price : data.price
    }
    axios.post('http://localhost:5000/cartsadd',cartItem)
   
     .then(res=>{
      console.log(res.data)

      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} succecfully Added`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch();


      }
    })

    .catch(error=>{
      console.log(error,'eror khaicoc')
    })
  
   

    if( user && user.email ){

      // send cartItem to data base



    }else{
      Swal.fire({
        title: "Are you want to order ?",
        text: "Please Login Or Signup !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I wannt !"
      }).then((result) => {
        if (result.isConfirmed) {
        //  navigate
          navigate('/auth/signup')
        }
      });

    }
   
  };

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
            <div>
              {" "}
              <button
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
              </button>
            </div>

            <button className="text-lg bg-red-500 text-white px-4 rounded-md">
              Buy now
            </button>

            <button>
              <FaHeart className=""></FaHeart>
            </button>

            <button
              onClick={() => handleAddtocart(data)}
              className="bg-black px-4 text-white  rounded-md text-lg"
            >
              Add To Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
