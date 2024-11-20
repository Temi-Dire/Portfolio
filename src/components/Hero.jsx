import { motion as m } from 'framer-motion';

import { styles } from '../styles'

import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
// import { ComputersCanvas } from './canvas';

const Hero = () => {

  const [cursor, setCursor] = useState(true);

  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <m.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className="w-1 sm:h-80 h-40 rounded-full overflow-hidden">
            <m.div className="w-full violet-gradient rounded-full bg-[#915EFF]" initial={{ height: 0 }} animate={{ height: `${100}%` }} transition={{ duration: 1, ease: "easeInOut" }}/>
          </div>
        </div>

        <div>
          <m.h1 initial={{opacity: 0}} animate={{opacity:1}} className={`${styles.heroHeadText}`}>Hi, I&apos;m {' '}
            <span className='text-[#915EFF]'>
              <Typewriter words={[ 'Owoeye' ,'Temidire']} loop={1} typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={() => {setCursor(false); console.log(cursor)}}  />  
            </span>
          </m.h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop 3D visuals, user <br className='hidden sm:block'/> interfaces and web applications</p> */}
            {/* <Typewriter words={[ 'frontend engineer', 'develop websites', 'develop web applications']} loop={5} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} /> */}
          <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>I am a {' '}
            <span style={{ fontWeight: 'bold' }}>
            <div className='w-[300px] inline-block'>
              <Typewriter words={[ 'Website Developer/Designer', 'Frontend Engineer']} loop={1} cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={() => {setCursor(false); console.log(cursor)}}  />
            </div> <br /> <span className='font-normal'>Skilled with React, Three.js, TailwindCSS, and more.{' '}</span>
              {/* <Typewriter words={[ 'build interactive web experiences.', 'develop websites', 'develop web applications']} loop={5} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} /> */}
        </span>
      </h1>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  )
}

export default Hero