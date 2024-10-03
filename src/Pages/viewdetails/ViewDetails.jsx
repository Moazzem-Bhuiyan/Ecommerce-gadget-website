import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import usecarts from "../../Hooks/usecarts";
import { useForm } from "react-hook-form"
import useAxiospublic from "../../Hooks/useAxiospublic";



const ViewDetails = () => {

  const axiospublic=useAxiospublic();

  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{ 
    
    console.log(data)

    const userinfo ={

      name : data.name,
      address : data.address,
      city:data.city,
      phone : data.phone,
      email :data. email
    }

    axiospublic.post('/usersinfo',userinfo)
    .then(res=>{

      if(res.data.insertedId){
        console.log('user info save successfully')
      }
     
    })


}
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
      <div className=" grid gap-5 md:grid-cols-2">
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

          <div className="mt-10 text-2xl md:flex gap-10 ">
            <div className="flex  justify-center lg:h-10 md:mt-10 gap-5">
              {" "}
              <button
                className="border-l-2 rounded-md p-1 border-red-500 hover:bg-red-500"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
              >
                -
              </button>{" "}
            <button>  {count}{" "}</button>
              <button
                className="border-r-2 border-red-500 rounded-md p-1 hover:bg-red-500"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            

           <div className=" flex justify-between gap-10 mt-10"> 


          <button className="btn  outline-none border-none  bg-red-500 text-white " onClick={() => document.getElementById('my_modal_3').showModal()}>Buy Now </button>

<dialog id="my_modal_3" className="modal bg-white ">
  <div className="modal-box bg-white max-w-lg w-full">
    <form method="dialog" className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
      {/* Modal close button */}

      <button type="button" className="btn btn-sm btn-circle  btn-ghost absolute right-2 top-2">✕</button>
      
      <h3 className="font-bold text-lg text-center">Fill Your Details</h3>
      
      {/* Name Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input 
          type="text" 
          {...register("name")}
          placeholder="Enter your name" 
          className="input input-bordered bg-white w-full" 
          required 
        />
      </div>

      {/* Address Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Address</span>
        </label>
        <input 
          type="text" 
          {...register("address")}
          placeholder="Enter your address" 
          className="input input-bordered  bg-white w-full" 
          required 
        />
      </div>

      {/* City Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">City</span>
        </label>
        <input 
          type="text" 
          {...register("city")}
          placeholder="Enter your city" 
          className="input input-bordered bg-white w-full" 
          required 
        />
      </div>

      {/* Phone Number Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input 
          type="tel" 
          {...register("phone")}
          placeholder="Enter your phone number" 
          className="input input-bordered  bg-white w-full" 
          required 
        />
      </div>

      {/* Email Input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input 
          type="email" 
          {...register("email")}
          placeholder="Enter your email" 
          className="input input-bordered  bg-white w-full" 
          required 
        />
      </div>

      {/* Submit Button */}
      <div className="form-control mt-4">
        <button type="submit" className="btn btn-primary w-full">Submit</button>
      </div>
    </form>
  </div>
</dialog>

            <button>
              <FaHeart className=""></FaHeart>
            </button>

            <button
              onClick={() => handleAddtocart(data)}
              className="bg-black px-4 text-white  rounded-md text-lg"
            >
              Add To Cart{" "}
            </button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
