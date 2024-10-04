import { motion } from "framer-motion";
import aboutpic from '../../../assets/about/about.png';

const About = () => {
  return (
    <div className='grid md:grid-cols-2 mt-28 p-10'>
      {/* Animated Text Section */}
      <motion.div
        className='grid items-center'
        initial={{ opacity: 0, x: -50 }} // Initial state
        animate={{ opacity: 1, x: 0 }}   // Animated state
        transition={{ duration: 0.5 }}    // Transition properties
      >
        <p className='leading-10'>
          <span className='text-4xl font-semibold'>Our Story</span><br />
          Launched in 2015, Exclusive is South Asia’s premier online shopping 
          marketplace with an active presence in Bangladesh. Supported by a wide range of 
          tailored marketing, data, and service solutions, Exclusive has 10,500 sellers 
          and 300 brands and serves 3 million customers across the region.
        </p>
      </motion.div>

      {/* Animated Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }} // Initial state
        animate={{ opacity: 1, scale: 1 }}    // Animated state
        transition={{ duration: 0.5 }}         // Transition properties
      >
        <img className='w-full' src={aboutpic} alt="About Us" />
      </motion.div>
    </div>
  );
};

export default About;
