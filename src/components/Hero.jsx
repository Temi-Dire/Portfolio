/* eslint-disable react/no-unknown-property */
import { motion as m } from 'framer-motion';

import { styles } from '../styles'

import { Suspense, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CanvasLoader from './Loader';
import Developer from './Developer';
import { SectionWrapper } from '../hoc';
import { useMediaQuery } from 'react-responsive'


// import { ComputersCanvas } from './canvas';

const Hero = () => {

  const [cursor, setCursor] = useState(true);

  const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})

  return (
    <div className='relative'>
    <section className='relative w-full h-[70vh] mx-auto grid grid-cols-2'>

      <div className={` top-[120px] w-full col-span-2 md:col-span-1 md:self-center max-w-7xl flex flex-row items-start gap-5 `}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <m.div initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut" }} className='w-5 h-5 rounded-full bg-[#915EFF]'/>
          <div className="w-1 sm:h-80 h-40 rounded-full overflow-hidden">
            <m.div className="w-full violet-gradient rounded-full bg-[#915EFF]" initial={{ height: 0 }} animate={{ height: `${100}%` }} transition={{ duration: 1, ease: "easeInOut" }}/>
          </div>
        </div>

        <div>
          <m.h1 initial={{opacity: 0}} animate={{opacity:1}} className={`${styles.heroHeadText}`}>Hi, I&apos;m {' '}
            <span className='text-[#915EFF]'>Temidire</span>
          </m.h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}> I develop 3D visuals, user <br className='hidden sm:block'/> interfaces and web applications</p> */}
          {/* <Typewriter words={[ 'frontend engineer', 'develop websites', 'develop web applications']} loop={5} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} /> */}
          <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span >
            <div className='inline-block'>
              <Typewriter words={[ 'I am a website developer who is skilled with React.js, Next.js, Three.js, TailwindCSS and more.' ]} loop={1} cursorStyle='|' typeSpeed={50} deleteSpeed={50} delaySpeed={1000} onLoopDone={() => {setCursor(false); console.log(cursor)}}  />
            </div> <br />
              {/* <Typewriter words={[ 'build interactive web experiences.', 'develop websites', 'develop web applications']} loop={5} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} onLoopDone={handleDone} onType={handleType} /> */}
        </span>
      </h1>
        </div>
      </div>

      <div className="bg-bl w-full h-full col-span-2 md:col-span-1 md:block">

      <Canvas>
        <ambientLight intensity={7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <directionalLight position={[10, 10, 10 ]} intensity={1} />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2}  maxPolarAngle={Math.PI / 2}/>
        <Suspense fallback={<CanvasLoader />}>
          <Developer scale={isDesktop ? 3 : 2.3} position={[0, isDesktop ? -3.2 : -2.0, 0]} rotation={[Math.PI / 90, 0, 0]}/>
        </Suspense>
      </Canvas>
      </div>


      {/* <ComputersCanvas /> */}
    </section>
    <div className=' w-full justify-center hidden md:flex items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <m.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  )

}

const WrappedHero = SectionWrapper(Hero, 'hero');


export default WrappedHero