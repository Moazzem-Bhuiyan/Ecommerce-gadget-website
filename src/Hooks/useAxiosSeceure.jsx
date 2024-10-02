import axios from "axios";

const axiossecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSeceure = () => {

    return axiossecure
  
};

export default useAxiosSeceure;