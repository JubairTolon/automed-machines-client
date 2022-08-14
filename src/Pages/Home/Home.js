import ReviewsHome from '../Reviews/ReviewsHome';
import AboutHome from './AboutHome';
import Banner from './Banner';
import Brands from './Brands';
import BusinsessSummary from './BusinsessSummary';
import Products from './Products';
import Services from './Services';

const Home = ({ review }) => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <AboutHome></AboutHome>
            <Services></Services>
            <Products></Products>
            <ReviewsHome></ReviewsHome>
            <BusinsessSummary></BusinsessSummary>
        </div>
    );
};

export default Home;