







// components 
import ServiceSlider from '../../components/ServiceSlider';
import Blub from '../../components/Bulb';
import Circles from '../../components/Circles';


// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Services = () => {
  return(
    <div className='h' >
    <Circles/>
   <div className='container mx-auto'></div> 
   <Blub/>
   
  </div>

  );
};

export default Services;
