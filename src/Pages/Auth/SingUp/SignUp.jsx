import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import useAxiospublic from "../../../Hooks/useAxiospublic";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const axiospublic = useAxiospublic(); // Typo fixed
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
      <h1 className="text-4xl my-2 pl-8 md:pl-0">Create an account</h1>
      <p className="font-semibold pl-8 md:pl-0 mb-10">Enter your details below</p>

      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8 p-4 md:p-0">
        <input
          className=" outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="text"
          {...register("name", { required: true })}
          placeholder="Name"
        />{" "}
        <br />
        <input
          className=" outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <br />
        <input
          className=" outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />{" "}
        <br />
        <input
          className=" md:w-3/4 w-full bg-rose-600 py-1 rounded-sm text-white text-lg cursor-pointer"
          type="submit"
          value="Create Account"
        />
        <br />

        <input
          onClick={googleSignIn}
          className=" md:w-3/4 w-full bg-white py-1 border border-black rounded-sm text-black text-lg cursor-pointer"
          type="button"
          value=" SignUp With Google"
        />
      </form>

      <h1 className="mt-5 p-3 md:p-0">
        Already Have an Account?{" "}
        <Link to="/auth/signin">
          <span className=" underline text-blue-500">Login</span>
        </Link>
      </h1>
    </div>
  );
};

export default SignUp;
