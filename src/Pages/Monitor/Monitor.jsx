import React from "react";
import useData from "../../Hooks/useData";
import CategoryCard from "../../shared/categoryCard/CategoryCard";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const Monitor = () => {
  const { product } = useData();

  const monitor = product.filter((monitor) => monitor.category === "monitor");

  return (
    <>
      <section>
        <SectionTitle subtitle={"All Products"} title={"Monitor"}></SectionTitle>
      </section>
      <div className="grid md:grid-cols-3 gap-5 my-20">

      {monitor.map((monitor) => (
          <CategoryCard item={monitor}></CategoryCard>
        ))}
     

      </div>
     
      
    </>
  );
};

export default Monitor;
