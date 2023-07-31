import './Brand.css'
import { SiHyundai, SiToyota, SiAudi, SiMazda, SiLamborghini, SiFord, SiBmw, SiBentley, SiHonda } from 'react-icons/si';


const Brands = () => {
    return (
        <div className="marquee mx-auto w-full">
            <ul className="marquee-content text-5xl lg:text-7xl">
                <li><SiHyundai /></li>
                <li><SiAudi /></li>
                <li><SiMazda /></li>
                <li><SiLamborghini /></li>
                <li><SiFord /></li>
                <li><SiBmw /></li>
                <li><SiBentley /></li>
                <li><SiHonda /></li>
                <li><SiToyota /></li>

                <li><SiHyundai /></li>
                <li><SiAudi /></li>
                <li><SiMazda /></li>
                <li><SiLamborghini /></li>
                <li><SiFord /></li>
                <li><SiBmw /></li>
                <li><SiBentley /></li>
                <li><SiHonda /></li>
                <li><SiToyota /></li>

                <li><SiHyundai /></li>
                <li><SiAudi /></li>
                <li><SiMazda /></li>
                <li><SiLamborghini /></li>
                <li><SiFord /></li>
                <li><SiBmw /></li>
                <li><SiBentley /></li>
            </ul>
        </div>
    );
};

export default Brands;
