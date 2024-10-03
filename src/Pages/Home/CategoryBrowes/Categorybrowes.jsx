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

      <div className=" md:flex md:justify-evenly  justify-center my-20 space-y-2 p-10 md:p-0 ">
        <Link to ='/monitor'>
          <div className=" space-y-2 border p-10 mt-2">
            <div  className="flex justify-center"><FiMonitor className="text-6xl" /></div>
            <h1 className="text-center">Monitor</h1>
          </div>
        </Link>

        <Link to='/keyboard'>
          <div className=" space-y-2  border p-10">
            <div className="flex justify-center"><GiKeyboard className="text-6xl" /></div>
            <h1 className="text-center">KeyBoard</h1>
          </div>
        </Link>

        <Link to='/camera'>
          <div className=" space-y-2  border p-10">
            <div  className="flex justify-center"><CiCamera className="text-6xl" /></div>
            <h1 className="text-center">Camera</h1>
          </div>
        </Link>

        <Link to='gamepad'>
          <div className=" space-y-2  border p-10">
           <div  className="flex justify-center"><LuGamepad className="text-6xl"  /></div>
            <h1 className="text-center">Game Pad</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categorybrowes;
