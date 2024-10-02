import React from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { GiKeyboard } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";

const Categorybrowes = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subtitle={"Category"}
          title={"Browes By Category"}
        ></SectionTitle>
      </section>

      <div className="flex justify-evenly my-20 space-y-2 ">
        <Link to ='/monitor'>
          <div className=" space-y-2 border p-10 mt-2">
            <div><FiMonitor className="text-6xl" /></div>
            <h1>Monitor</h1>
          </div>
        </Link>

        <Link to='/keyboard'>
          <div className=" space-y-2  border p-10">
            <div><GiKeyboard className="text-6xl" /></div>
            <h1>KeyBoard</h1>
          </div>
        </Link>

        <Link to='/camera'>
          <div className=" space-y-2  border p-10">
            <div><CiCamera className="text-6xl" /></div>
            <h1>Camera</h1>
          </div>
        </Link>

        <Link to='gamepad'>
          <div className=" space-y-2  border p-10">
           <div><LuGamepad className="text-6xl"  /></div>
            <h1 className="">Game Pad</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categorybrowes;
