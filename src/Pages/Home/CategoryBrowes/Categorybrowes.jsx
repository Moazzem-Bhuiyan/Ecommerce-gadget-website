import React, { useEffect } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { CiCamera } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { GiKeyboard } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const CategoryBrowse = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section>
        <SectionTitle subtitle={"Category"} title={"Browse By Category"} />
      </section>

      <div className="md:flex md:justify-evenly justify-center my-20 space-y-2 p-10 md:p-0">
        <Link to="/monitor">
          <div className="space-y-2 border p-10 mt-2" data-aos="fade-up">
            <div className="flex justify-center">
              <FiMonitor className="text-6xl" />
            </div>
            <h1 className="text-center">Monitor</h1>
          </div>
        </Link>

        <Link to="/keyboard">
          <div className="space-y-2 border p-10" data-aos="fade-up">
            <div className="flex justify-center">
              <GiKeyboard className="text-6xl" />
            </div>
            <h1 className="text-center">Keyboard</h1>
          </div>
        </Link>

        <Link to="/camera">
          <div className="space-y-2 border p-10" data-aos="fade-up">
            <div className="flex justify-center">
              <CiCamera className="text-6xl" />
            </div>
            <h1 className="text-center">Camera</h1>
          </div>
        </Link>

        <Link to="/gamepad">
          <div className="space-y-2 border p-10" data-aos="fade-up">
            <div className="flex justify-center">
              <LuGamepad className="text-6xl" />
            </div>
            <h1 className="text-center">Game Pad</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBrowse;
