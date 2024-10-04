import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import useAxiospublic from "../../../Hooks/useAxiospublic";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { motion } from "framer-motion";

const SignUp = () => {
  const axiospublic = useAxiospublic();
  const { googlesingin } = useContext(Authcontext);
  const navigate = useNavigate();
  const { createUser } = useContext(Authcontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      // Create the user
      const result = await createUser(data.email, data.password);
      console.log(result.user);

      // Update the profile with displayName
      await updateProfile(result.user, {
        displayName: data.name,
      });

      // Prepare user info for the database
      const userInfo = {
        email: data.email,
        name: data.name,
      };

      // Post the user info to the backend
      const res = await axiospublic.post("/user", userInfo);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You Became our family member",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const googleSignIn = () => {
    googlesingin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google SignIn error", error);
      });
  };

  return (
    <div className="">
      <motion.h1
        className="text-4xl my-2 pl-8 md:pl-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Create an account
      </motion.h1>
      <motion.p
        className="font-semibold pl-8 md:pl-0 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Enter your details below
      </motion.p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 p-4 md:p-0"
      >
        <motion.input
          className="outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <br />
        <motion.input
          className="outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <br />
        <motion.input
          className="outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <br />
        <motion.input
          className="md:w-3/4 w-full bg-rose-600 py-1 rounded-sm text-white text-lg cursor-pointer"
          type="submit"
          value="Create Account"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <br />

        <motion.input
          onClick={googleSignIn}
          className="md:w-3/4 w-full bg-white py-1 border border-black rounded-sm text-black text-lg cursor-pointer"
          type="button"
          value="Sign Up With Google"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </form>

      <motion.h1
        className="mt-5 p-3 md:p-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Already Have an Account?{" "}
        <Link to="/auth/signin">
          <span className="underline text-blue-500">Login</span>
        </Link>
      </motion.h1>
    </div>
  );
};

export default SignUp;
