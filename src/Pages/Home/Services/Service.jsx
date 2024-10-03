import { FaCarSide } from "react-icons/fa";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className="my-32">
      <section>
        <SectionTitle title={"Services"}></SectionTitle>
      </section>

      <div className=" md:flex justify-evenly  ">
        <div>
          <div className="flex justify-center ">
            <FaCarSide className="bg-black text-6xl rounded-full  border-8 p-2 text-white" />{" "}
          </div>
          <h1 className="text-center my-1">FREE AND FAST DELIVERY</h1>
          <p className="text-center">Free delivery for all orders over $140</p>
        </div>
        <div className="my-10 md:my-0">
          <div className="flex justify-center">
            {" "}
            <FaHeadphonesSimple className="bg-black text-6xl rounded-full border-8 p-2 text-white" />
          </div>
          <h1 className="text-center my-1">FREE AND FAST DELIVERY</h1>
          <p className="text-center" >Free delivery for all orders over $140</p>
        </div>
        <div>
          <div className="flex justify-center">
            {" "}
            <IoShieldCheckmarkOutline className="bg-black text-6xl rounded-full border-8 p-2 text-white" />
          </div>
          <h1 className="text-center my-1">FREE AND FAST DELIVERY</h1>
          <p className="text-center">Free delivery for all orders over $140</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
