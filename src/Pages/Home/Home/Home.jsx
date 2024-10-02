import React from 'react';
import Banner from '../Banner/Banner';
import Flashselse from '../Flash salse/Flashselse';
import Categorybrowes from '../CategoryBrowes/Categorybrowes';
import BestSelling from '../BestSelling/BestSelling';
import SpekerBanner from '../SpekerBanner/SpekerBanner';
import NewArival from '../Newarival/NewArival';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Flashselse></Flashselse>
            <Categorybrowes></Categorybrowes>
            <BestSelling></BestSelling>
            <SpekerBanner></SpekerBanner>
           <NewArival></NewArival>
           <Service></Service>
          
        </div>
    );
};

export default Home;