import { useContext } from "react";
import { motion } from "framer-motion";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="mt-28">
      <div className="">
        <motion.h1
          className="text-center  text-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome--{" "}
          <span className="text-red-500 ">
            {user?.displayName || "Please-Login😊"}
          </span>
        </motion.h1>
      </div>
      <div className="flex justify-center">
        <img className="rounded-md my-10" src={user?.photoURL} alt="" />
      </div>

      {user && (
        <motion.div
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10 mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">Edit Your Profile</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
            </div>
            <h3 className="mt-6 text-lg font-semibold">Password Changes</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full p-2 border bg-white border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="button"
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default UserProfile;
