import { Rating } from "@mui/material";
import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import usecarts from "../../Hooks/usecarts";
import { useForm } from "react-hook-form";
import useAxiospublic from "../../Hooks/useAxiospublic";
import { motion } from "framer-motion"; // Importing Framer Motion

const ViewDetails = () => {
  const axiospublic = useAxiospublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userinfo = {
      name: data.name,
      address: data.address,
      city: data.city,
      phone: data.phone,
      email: data.email,
    };

    axiospublic.post('/usersinfo', userinfo).then(res => {
      if (res.data.insertedId) {
        console.log('user info save successfully');
      }
    });
  };

  const [cart, refetch] = usecarts();
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);
  const details = useLoaderData();
  const { id } = useParams();
  const idnt = parseInt(id);
  const data = details.find((data) => data.id === idnt);
  const [count, setCount] = useState(0);

  const handleAddtocart = (food) => {
    const cartItem = {
      menuId: data._id,
      email: user.email,
      title: data.title,
      img: data.img,
      price: data.price,
    };

    axios.post('https://ecommerce-gadget-flame.vercel.app/cartsadd', cartItem)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.title} successfully Added`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch(error => {
        console.log(error, 'error occurred');
      });

    if (!user || !user.email) {
      Swal.fire({
        title: "Do you want to order?",
        text: "Please Login Or Signup!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, I want!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/auth/signup');
        }
      });
    }
  };

  return (
    <div className="w-[80%] m-auto my-44">
      <div className="grid gap-5 md:grid-cols-2">
        {/* Animated Image Section */}
        <motion.div
          className="bg-slate-50"
          initial={{ opacity: 0, y: -50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}    // Animated state
          transition={{ duration: 0.5 }}     // Transition properties
        >
          <img className="w-80 m-auto" src={data.img} alt="" />
        </motion.div>

        <div>
          {/* Animated Title */}
          <motion.h1
            className="text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }} // Initial state
            animate={{ opacity: 1, x: 0 }}    // Animated state
            transition={{ duration: 0.5 }}     // Transition properties
          >
            {data.title}
          </motion.h1>

          {/* Animated Price */}
          <motion.p
            className="text-red-500 my-5 text-2xl"
            initial={{ opacity: 0, x: -50 }} // Initial state
            animate={{ opacity: 1, x: 0 }}    // Animated state
            transition={{ duration: 0.5, delay: 0.1 }} // Transition properties
          >
            ${data.price}
          </motion.p>

          <Rating
            name="simple-controlled"
            value={data.rating}
            onChange={(event, newValue) => {
              // setValue(newValue); // Uncomment if you have a state for rating
            }}
          />
          <hr />

          <div className="mt-10 text-2xl md:flex gap-10">
            <div className="flex justify-center lg:h-10 md:mt-10 gap-5">
              <button
                className="border-l-2 rounded-md p-1 border-red-500 hover:bg-red-500"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
              >
                -
              </button>
              <button>{count}{" "}</button>
              <button
                className="border-r-2 border-red-500 rounded-md p-1 hover:bg-red-500"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>

            <div className="flex justify-between gap-10 mt-10">
              {/* Animated Buy Now Button */}
              <motion.button
                className="btn outline-none border-none bg-red-500 text-white"
                onClick={() => document.getElementById('my_modal_3').showModal()}
                initial={{ opacity: 0, scale: 0 }} // Initial state
                animate={{ opacity: 1, scale: 1 }}   // Animated state
                transition={{ duration: 0.5, delay: 0.2 }} // Transition properties
              >
                Buy Now
              </motion.button>

              {/* Modal Section */}
              <dialog id="my_modal_3" className="modal bg-white">
                <div className="modal-box bg-white max-w-lg w-full">
                  <form method="dialog" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    <h3 className="font-bold text-lg text-center">Fill Your Details</h3>

                    {/* Modal Inputs */}
                    {["name", "address", "city", "phone", "email"].map((field, index) => (
                      <div className="form-control" key={index}>
                        <label className="label">
                          <span className="label-text">{field.charAt(0).toUpperCase() + field.slice(1)}</span>
                        </label>
                        <input
                          type={field === "phone" ? "tel" : field === "email" ? "email" : "text"}
                          {...register(field)}
                          placeholder={`Enter your ${field}`}
                          className="input input-bordered bg-white w-full"
                          required
                        />
                      </div>
                    ))}

                    <div className="form-control mt-4">
                      <button type="submit" className="btn btn-primary w-full">Submit</button>
                    </div>
                  </form>
                </div>
              </dialog>

              {/* Animated Heart Button */}
              <motion.button
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                className="bg-white p-2 rounded-full"
              >
                <FaHeart className="" />
              </motion.button>

              {/* Animated Add to Cart Button */}
              <motion.button
                onClick={() => handleAddtocart(data)}
                className="bg-black px-4 text-white rounded-md text-lg"
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }}  // Animated state
                transition={{ duration: 0.5, delay: 0.3 }} // Transition properties
              >
                Add To Cart{" "}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
