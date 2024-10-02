import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../../AuthProvider/AuthProvider";

const SignUp = () => {
  const navigate =useNavigate();

  const {createUser}=useContext(Authcontext)

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      navigate('/')
    
    })
   .catch((error)=>{
    console.error('error',error)
   })
    
    
    }

  return (
    <div className="">
      <h1 className="text-4xl my-2">Create an account </h1>
      <p className="font-semibold mb-10">Enter your details below </p>

      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8">
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="text"
          {...register("name")}
          placeholder="Name"
          id=""
        />{" "}
        <br />
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="email"
          {...register("email")}
          placeholder="Email"
          id=""
        />
        <br />
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="password"
          {...register("password")}
          placeholder="Password"
          id=""
        />{" "}
        <br />
        <input
          className="w-3/4 bg-rose-600 py-1 rounded-sm text-white text-lg cursor-pointer "
          type="submit"
          value="Create Account"
        />
        <br />

        <input
          className="w-3/4 bg-white py-1 border border-black rounded-sm text-black text-lg cursor-pointer "
          type="button"
          value=" SignUp With Google"
        />
      </form>

      <h1 className="mt-5">
        Alrady Have an Account?{" "}
        <Link to="/auth/signin">
          <span className=" underline text-blue-500">Login</span>
        </Link>
      </h1>
    </div>
  );
};

export default SignUp;
