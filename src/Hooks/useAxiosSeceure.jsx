import axios from "axios";

const axiossecure = axios.create({
    baseURL:'https://update-gadget.vercel.app'
})

const useAxiosSeceure = () => {

    return axiossecure
  
};

export default useAxiosSeceure;