import React, { useEffect } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useData from "../../../Hooks/useData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const BestSelling = () => {
  const { product } = useData();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div>
      <section>
        <SectionTitle
          subtitle={"This Month"}
          title={"Best Selling Product"}
        ></SectionTitle>
      </section>

      <>
        <div className="lg:block hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {product.map((item, index) => (
              <SwiperSlide key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Link to={`/viewdetails/${item.id}`}>
                  <div className="rounded-md">
                    <div className="w-full bg-slate-50">
                      <img
                        className="h-52 p-5 w-[80%] m-auto"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <h1 className="text-xl font-bold my-4">{item.title}</h1>
                    <h1 className="text-red-500 mb-5 text-lg font-semibold">
                      ${item.price}
                    </h1>

                    <Rating
                      className="mb-10"
                      name="simple-controlled"
                      value={item.rating}
                      onChange={(event, newValue) => {
                        // setValue(newValue); // If you want to update state, add setValue here
                      }}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden p-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {product.map((item, index) => (
              <SwiperSlide key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <Link to={`/viewdetails/${item.id}`}>
                  <div className="rounded-md">
                    <div className="w-full bg-slate-50">
                      <img
                        className="h-52 p-5 md:w-[80%] m-auto"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <h1 className="text-xl font-bold my-4">{item.title}</h1>
                    <h1 className="text-red-500 mb-5 text-lg font-semibold">
                      ${item.price}
                    </h1>

                    <Rating
                      className="mb-10"
                      name="simple-controlled"
                      value={item.rating}
                      onChange={(event, newValue) => {
                        // setValue(newValue); // If you want to update state, add setValue here
                      }}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    </div>
  );
};

export default BestSelling;
