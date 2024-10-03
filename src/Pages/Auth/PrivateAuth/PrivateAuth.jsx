import { useContext } from "react";
import { Authcontext } from "../../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateAuth = ({children}) => {

    const location =useLocation();
    const {user,loading}=useContext(Authcontext);

    if(loading){
        return <p>Loading ...</p>
    }

    if(user){
        return children
    }

    return <Navigate to="/auth/signup" state={{ from: location }} replace />;
  
};

export default PrivateAuth;