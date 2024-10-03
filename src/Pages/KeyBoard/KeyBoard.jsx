import { key } from "localforage";
import useData from "../../Hooks/useData";
import CategoryCard from "../../shared/categoryCard/CategoryCard";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";


const KeyBoard = () => {

    const { product } = useData();

  const keyboard = product.filter((keyboard) => keyboard.category === "keyboard");
    return (
        <div>
            <>
      <section>
        <SectionTitle subtitle={"All Products"} title={"KeyBoard"}></SectionTitle>
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

export default KeyBoard;