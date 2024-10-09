import React, { useEffect } from "react";
import n1 from "../../../assets/newarival/n1.png";
import n2 from "../../../assets/newarival/n2.png";
import n3 from "../../../assets/newarival/n3.png";
import n4 from "../../../assets/newarival/n4.png";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const NewArrival = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="h-[50vh]">
      <section>
        <SectionTitle subtitle={'Featured'} title={'New Arrival'} />
      </section>
      <div className="grid md:grid-cols-4 p-10 md:p-0 gap-10 my-10">
        {/* Large Image */}
        <div className="col-span-2 row-span-2 bg-black" data-aos="fade-up">
          <img src={n1} alt="New Arrival 1" />
        </div>
        {/* Small Image */}
        <div className="col-span-2 bg-black" data-aos="zoom-in" data-aos-delay="100">
          <img src={n2} alt="New Arrival 2" />
        </div>
        {/* Smaller Images */}
        <div className="col-span-1 bg-black p-3" data-aos="fade-left" data-aos-delay="200">
          <img className="w-full" src={n3} alt="New Arrival 3" />
        </div>
        <div className="col-span-1 bg-black p-3" data-aos="fade-right" data-aos-delay="300">
          <img className="w-full" src={n4} alt="New Arrival 4" />
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
