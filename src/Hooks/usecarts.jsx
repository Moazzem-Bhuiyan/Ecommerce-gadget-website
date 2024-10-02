import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSeceure from "./useAxiosSeceure";



const usecarts = () => {
    const axiossecure = useAxiosSeceure();
    const {data : cart = [] ,refetch} = useQuery({
        queryKey:['carts'],
        queryFn: async()=>{

            const res = await axiossecure.get('/cartsadd')
            return res.data
        }

    })
    return [cart,refetch]


   
};

export default usecarts;