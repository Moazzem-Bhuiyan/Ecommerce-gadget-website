import { FaTrashAlt } from "react-icons/fa";
import usecarts from "../../Hooks/usecarts";
import useAxiosSeceure from "../../Hooks/useAxiosSeceure";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const CartDetails = () => {
  const axiossecure = useAxiosSeceure();
  const [cart, refetch] = usecarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiossecure.delete(`/cartsadd/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div  className="mt-28">
        <h1 className="text-2xl">Total Add Item : {cart.length} </h1>
        <h1 className="text-2xl">Total Price : ${totalPrice}</h1>

        <div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border my-20 border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">Image</th>
                  <th className="px-4 py-2 border border-gray-300">Title</th>
                  <th className="px-4 py-2 border border-gray-300">Price</th>
                  <th className="px-4 py-2 border border-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {cart.map((item, index) => (
                    <motion.tr
                      key={item._id} // use _id for a unique key
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <th className="bg-slate-300 px- py-2 border border-gray-300">
                        {index + 1}
                      </th>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="md:flex items-center">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 md:w-12">
                              <img
                                src={item.img}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-2 border border-gray-300">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        ${item.price}
                      </td>

                      <th className="px- py-2 border border-gray-300">
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-ghost btn-xs text-red-500"
                        >
                          <FaTrashAlt />
                        </button>
                      </th>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
