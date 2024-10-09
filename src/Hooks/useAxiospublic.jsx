import axios from "axios";



const axiospulic = axios.create({
    baseURL:'https://update-gadget.vercel.app'
})


const useAxiospublic = () => {
    
return axiospulic

   
};

export default useAxiospublic;