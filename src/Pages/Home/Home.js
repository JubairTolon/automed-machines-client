import React from 'react';
import AboutHome from '../About/AboutHome';
import Banner from './Banner';
import Brands from './Brands';
import BusinsessSummary from './BusinsessSummary';
import Products from './Products';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <AboutHome></AboutHome>
            <Services></Services>
            <Products></Products>
            <BusinsessSummary></BusinsessSummary>
        </div>
    );
};

export default Home;