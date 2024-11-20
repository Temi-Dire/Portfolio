import { Tilt } from 'react-tilt'
import { motion as m } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
// import { motion as m } from 'framer-motion/client'
import PropTypes from "prop-types";
import { SectionWrapper } from '../hoc'



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className={`xs:w-[250px] w-full`} >
      <m.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'> {title} </h3>
        </div>
      </m.div>
    </Tilt>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </m.div>
      <m.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I&apos;m a passionate Frontend Developer with expertise in TypeScript, JavaScript, React, and Three.js. I have hands-on experience with tools like GitHub and Azure, enabling me to create efficient, scalable, and interactive web applications. 
        As a quick learner with strong communication skills, I excel in collaborative environments and adapt swiftly to new technologies. Let&apos;s work together so I can contribute to bringing your wonderful ideas to life!
      </m.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => 
        <ServiceCard key={index} {...service} />
        )}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about')

export default WrappedAbout;