import React from 'react';
import useData from '../../Hooks/useData';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import CategoryCard from '../../shared/categoryCard/CategoryCard';

const GamePad = () => {

    const { product } = useData();

    const keyboard = product.filter((keyboard) => keyboard.category === "gamepad");
    return (
        <div>
             <>
        <section>
          <SectionTitle
            subtitle={"All Products"}
            title={"GamePad"}
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

export default GamePad;