import { Outlet } from "react-router-dom";
import auth from '../../../assets/auth/auth.png'


const AuthDash = () => {


    return (

        <div className="grid gap-20 grid-cols-2 h-screen">

            <div className="grid items-center">
                <img src={auth} alt="" />
            </div>

            <div className="grid items-center">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default AuthDash;