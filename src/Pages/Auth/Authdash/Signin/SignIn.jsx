import React from "react";

const SignIn = () => {
  return (
    <div>

        <h1 className="text-4xl my-2">Login to Exclusive </h1>
        <p className="font-semibold mb-10">Enter your details below </p>
      <form action="" className=" space-y-8">
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="email"
          name="name"
          placeholder="Email"
          id=""
        />
        <br />
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="password"
          name="password"
          placeholder="Password"
          id=""
        />{" "}
        <br />
        <div className="flex gap-64 ">
          <button className="bg-red-500 p-2 px-5 text-white rounded-sm">
            Login
          </button>{" "}
          <button className=" underline text-red-500"> Forget Password</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
