import spekar from '../../../assets/banner/s1.png'

const SpekerBanner = () => {


    return (

        <div className="w-[95%] m-auto h-[500px] my-10" style={{backgroundImage: `url("${spekar}")`}} >

            <button className='bg-green-500 mt-[400px] ml-32 px-10 py-1 text-xl rounded-md  text-white '>Buy Now</button>
            
        </div>

    );
};

export default SpekerBanner;