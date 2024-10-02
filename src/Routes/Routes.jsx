import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/contact";
import About from "../Pages/Contact/About/About";
import Monitor from "../Pages/Monitor/Monitor";
import KeyBoard from "../Pages/KeyBoard/KeyBoard";
import Camera from "../Pages/Camera/Camera";
import GamePad from "../Pages/Gamepad/GamePad";
import AuthDash from "../Pages/Auth/Authdash/AuthDash";
import SignUp from "../Pages/Auth/SingUp/SignUp";
import SignIn from "../Pages/Auth/Authdash/Signin/signIn";
import ViewDetails from "../Pages/viewdetails/ViewDetails";

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
        element: <Contact></Contact>,
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
        element:<ViewDetails></ViewDetails>,
        loader : ()=> fetch ('/data.json'),
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
