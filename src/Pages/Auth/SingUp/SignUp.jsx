import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="">
      <h1 className="text-4xl my-2">Create an account </h1>
      <p className="font-semibold mb-10">Enter your details below </p>

      <form className=" space-y-8">
        <input
          className=" outline-none border-b-2 bg-white w-3/4 text-xl"
          type="text"
          name="name"
          placeholder="Name"
          id=""
        />{" "}
        <br />
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
