import { useEffect, useState } from "react";
const useData = () => {

    const [product,setProduct]=useState([])

    useEffect(()=>{

        fetch('https://update-gadget.vercel.app/carts')
        .then(res=> res.json())
        .then(data=>setProduct(data))
    },[])

    return {product}


    
};

export default useData;