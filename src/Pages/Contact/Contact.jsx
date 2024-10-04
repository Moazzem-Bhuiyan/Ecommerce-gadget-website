import { useForm } from "react-hook-form";
import { motion } from "framer-motion"; // Importing Framer Motion

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission (e.g., sending data to an API)
  };

  return (
    <div className="flex flex-col md:flex-row p-10 space-y-8 md:space-y-0 md:space-x-10 mt-28">
      {/* Animated Contact Info Section */}
      <motion.div
        className="bg-white shadow-md rounded-md p-6 flex-1"
        initial={{ opacity: 0, x: -50 }} // Initial state
        animate={{ opacity: 1, x: 0 }}    // Animated state
        transition={{ duration: 0.5 }}     // Transition properties
      >
        <h2 className="text-xl font-bold mb-4">Call To Us</h2>
        <p className="mb-2">
          We are available 24/7, 7 days a week.
        </p>
        <p className="mb-4">Phone: +8801820921814</p>
        <hr className="my-4" />
        <h2 className="text-xl font-bold mb-4">Write To Us</h2>
        <p className="mb-2">
          Fill out our form and we will contact you within 24 hours.
        </p>
        
        <p>Emails: tiyonbhuiyan.201@gmail.com</p>
      </motion.div>

      {/* Animated Contact Form Section */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-md p-6 flex-1"
        initial={{ opacity: 0, x: 50 }} // Initial state
        animate={{ opacity: 1, x: 0 }}    // Animated state
        transition={{ duration: 0.5 }}     // Transition properties
      >
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Your Name *</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
            className={`border bg-white rounded-md w-full p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Your Email *</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "This field is required" })}
            className={`border bg-white rounded-md w-full p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Your Phone *</label>
          <input
            type="text"
            id="phone"
            {...register("phone", { required: "This field is required" })}
            className={`border bg-white rounded-md w-full p-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Your Message</label>
          <textarea
            id="message"
            {...register("message")}
            className="border bg-white rounded-md w-full p-2"
            rows="5"
          />
        </div>

        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md">
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
