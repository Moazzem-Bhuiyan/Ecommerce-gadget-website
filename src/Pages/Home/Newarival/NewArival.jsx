import n1 from "../../../assets/newarival/n1.png";
import n2 from "../../../assets/newarival/n2.png";
import n3 from "../../../assets/newarival/n3.png";
import n4 from "../../../assets/newarival/n4.png";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const NewArival = () => {
  return (
    <div>
        <section><SectionTitle subtitle={'Featured'} title={'New Arrival'}></SectionTitle></section>
      <div className="grid grid-cols-4 gap-10 my-10 ">
        <div className=" col-span-2 row-span-2 bg-black">
          <img src={n1} alt="" />
        </div>
        <div className="col-span-2 bg-black">
          <img src="" alt={n2} />
        </div>
        <div className=" col-span-1 bg-black p-3">
        <img className="w-full" src={n3} alt="" />
        </div>
        <div className=" col-span-1 bg-black p-3">
          <img className="w-full" src={n4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewArival;
