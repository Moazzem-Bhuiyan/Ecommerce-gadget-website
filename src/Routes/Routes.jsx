import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";

import About from "../Pages/Contact/About/About";
import Monitor from "../Pages/Monitor/Monitor";
import KeyBoard from "../Pages/KeyBoard/KeyBoard";
import Camera from "../Pages/Camera/Camera";
import GamePad from "../Pages/Gamepad/GamePad";
import AuthDash from "../Pages/Auth/Authdash/AuthDash";
import SignUp from "../Pages/Auth/SingUp/SignUp";
import SignIn from "../Pages/Auth/Authdash/Signin/signIn";
import ViewDetails from "../Pages/viewdetails/ViewDetails";
import CartDetais from "../Pages/cartsDetails/CartDetais";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PrivateAuth from "../Pages/Auth/PrivateAuth/PrivateAuth";
import ViewAllProduct from "../Pages/viewdetails/ViewAllProduct/ViewAllProduct";
import ContactForm from "../Pages/Contact/contact";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/monitor",
        element: <Monitor></Monitor>,
      },
      {
        path: "/keyboard",
        element: <KeyBoard></KeyBoard>,
      },
      {
        path: "/camera",
        element: <Camera></Camera>,
      },
      {
        path: "/gamepad",
        element: <GamePad></GamePad>,
      },

      {
        path: '/viewdetails/:id',
        element:<PrivateAuth> <ViewDetails></ViewDetails> </PrivateAuth>,
        loader : ()=> fetch ('https://recap-gadget.vercel.app/carts'),
      },
      {
        path: "/cartDetails",
        element: <CartDetais></CartDetais>
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/viewall",
        element: <ViewAllProduct></ViewAllProduct>
      }
    


    ],


    
  },

  {

    path: '/auth',
    element: <AuthDash></AuthDash>,
    children:[

      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
    ]

  }
  
 
]);
