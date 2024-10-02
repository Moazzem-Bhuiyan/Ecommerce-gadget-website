import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate()
  const {signIn}=useContext(Authcontext)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    
    console.log(data);

    signIn(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      navigate('/')

    })
    .catch(error=>{

      console.error("error khaicoc mama",error)
    })


  }

  return (
    <div>
      <h1 className="text-4xl my-2">Login to Exclusive </h1>
      <p className="font-semibold mb-10">Enter your details below </p>
      <form onSubmit={handleSubmit(onSubmit)} className=" space-y-8">
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
        <div className="flex gap-64 ">
          <button
            type="submit"
            className="bg-red-500 p-2 px-5 text-white rounded-sm"
          >
            Login
          </button>{" "}
          <button className=" underline text-red-500"> Forget Password</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
