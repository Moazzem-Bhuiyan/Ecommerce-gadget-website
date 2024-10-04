import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTitle = ({ subtitle, title }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-20 p-5 text-center">
      {/* Subtitle */}
      {subtitle && (
        <p
          className="text-red-500 text-lg font-semibold tracking-wide uppercase border-l-8 border-red-500 rounded-s-md p-1 inline-block"
          data-aos="fade-right"
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl uppercase border-y-2 border-gray-200 my-3 py-2 font-bold tracking-wide"
        data-aos="fade-up"
      >
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
