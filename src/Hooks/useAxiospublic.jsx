import axios from "axios";



const axiospulic = axios.create({
    baseURL:'http://localhost:5000'
})


const useAxiospublic = () => {
    
return axiospulic

   
};

export default useAxiospublic;