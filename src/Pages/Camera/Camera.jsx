import React from "react";
import useData from "../../Hooks/useData";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import CategoryCard from "../../shared/categoryCard/CategoryCard";

const Camera = () => {
  const { product } = useData();

  const keyboard = product.filter((keyboard) => keyboard.category === "camera");
  return (
    <div>
      <>
        <section>
          <SectionTitle
            subtitle={"All Products"}
            title={"Monitor"}
          ></SectionTitle>
        </section>
        <div className="grid md:grid-cols-3 gap-5 my-20">
          {keyboard.map((monitor) => (
            <CategoryCard item={monitor}></CategoryCard>
          ))}
        </div>
      </>
    </div>
  );
};

export default Camera;
