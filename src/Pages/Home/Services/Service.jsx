import React, { useEffect } from "react";
import { FaCarSide } from "react-icons/fa";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="my-32">
      <section>
        <SectionTitle title={"Services"} />
      </section>

      <div className="md:flex justify-evenly">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="flex justify-center">
            <FaCarSide className="bg-black text-6xl rounded-full border-8 p-2 text-white" />
          </div>
          <h1 className="text-center my-1">FREE AND FAST DELIVERY</h1>
          <p className="text-center">Free delivery for all orders over $140</p>
        </div>
        
        <div className="my-10 md:my-0" data-aos="fade-up" data-aos-delay="200">
          <div className="flex justify-center">
            <FaHeadphonesSimple className="bg-black text-6xl rounded-full border-8 p-2 text-white" />
          </div>
          <h1 className="text-center my-1">24/7 CUSTOMER SUPPORT</h1>
          <p className="text-center">We're here to assist you anytime!</p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="flex justify-center">
            <IoShieldCheckmarkOutline className="bg-black text-6xl rounded-full border-8 p-2 text-white" />
          </div>
          <h1 className="text-center my-1">SECURE PAYMENT</h1>
          <p className="text-center">Your payment information is safe with us.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
