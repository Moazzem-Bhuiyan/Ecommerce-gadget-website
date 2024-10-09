// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Authcontext } from "../../../../AuthProvider/AuthProvider";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const { signIn } = useContext(Authcontext);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);

//     signIn(data.email, data.password)
//       .then((result) => {
//         console.log(result.user);
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("error khaicoc mama", error);
//       });
//   };

//   return (
//     <div>
//       <motion.h1
//         className="text-4xl my-2 pl-8 md:pl-0"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Login to Exclusive
//       </motion.h1>
//       <motion.p
//         className="font-semibold mb-10 pl-8 md:pl-0"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         Enter your details below
//       </motion.p>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-4 md:p-0">
//         <motion.input
//           className="outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
//           type="email"
//           {...register("email")}
//           placeholder="Email"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         />
//         <br />
//         <motion.input
//           className="outline-none border-b-2 bg-white md:w-3/4 w-full text-xl"
//           type="password"
//           {...register("password")}
//           placeholder="Password"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         />
//         <br />
//         <div className="flex md:gap-64 gap-40 p-2 md:p-0">
//           <motion.button
//             type="submit"
//             className="bg-red-500 p-2 px-5 text-white rounded-sm"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//           >
//             Login
//           </motion.button>
//           <motion.button
//             className="underline text-red-500"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             Forget Password
//           </motion.button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
