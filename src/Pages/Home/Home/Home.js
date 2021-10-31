import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TourQuality from '../TourQuality/TourQuality';
import AdvenTure from '../AdvenTure/AdvenTure'
// home start here
const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <TourQuality />
            <AdvenTure />
        </div>
    );
};

export default Home;