import React from 'react';
import About from '../About/About';
import Banner from './Banner';
import Brands from './Brands';
import Prodects from './Prodects';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <About></About>
            <Services></Services>
            <Prodects></Prodects>
        </div>
    );
};

export default Home;