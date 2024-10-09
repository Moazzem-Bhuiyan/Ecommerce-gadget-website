import { useQuery } from "@tanstack/react-query";

import useAxiosSeceure from "./useAxiosSeceure";



const usecarts = () => {
    const axiossecure = useAxiosSeceure();
    const {data : cart = [] ,refetch} = useQuery({
        queryKey:['carts'],
        queryFn: async()=>{

            const res = await axiossecure.get('https://ecommerce-gadget-flame.vercel.app/cartsadd')
            return res.data
        }

    })
    return [cart,refetch]


   
};

export default usecarts;