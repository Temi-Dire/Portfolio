import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants'
// import { menu, close } from '../assets'

import { AnimatePresence, motion as m } from 'framer-motion'

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" }},
    exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" }}
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${styles.paddingX}`}
    >
      <div
        className='w-full flex items-center justify-between max-w-7xl mx-auto'
      >
        <Link to={'/'} className='flex items-center gap-2' onClick={() => {window.scrollTo(0,0); setActive('')} } >
          {/* <img src={logo} alt='Logo' className='w-10 h-10 object-contain' /> */}
          <h1 className='text-[18px] font-bold text-white cursor-pointer flex items-center'>DIRECODES&nbsp;<span className='font-normal hidden sm:block text-[14px]'> | Frontend Engineer&nbsp;</span></h1>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) =>
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } hover:text-white text-[18px]`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}> {link.title} </a>
            </li> 
          )}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div onClick={() => setToggle(!toggle)} className="flex flex-col justify-center items-center cursor-pointer w-8 h-8 relative">
            <m.div
              animate={!toggle ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            className="w-full h-0.5 bg-white"
            />
            <m.div
              animate={!toggle ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-0.5 bg-white ${ toggle ? 'my-2' : 'my-1'}`}
            />
      
            <m.div
              animate={!toggle ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white"
            />
          </div>
          <AnimatePresence>
            {!toggle && <m.div
            variants={dropdownVariants}
            initial="hidden"
            animate={toggle ? "hidden" : "visible"}
            exit="exit"
            className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className=' list-none flex justify-end items-start flex-col gap-4 '>
                {navLinks.map((link) =>
                  <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary" } hover:text-white text-[16px] font-poppins font-medium`} onClick={() => {setActive(link.title); setToggle(!toggle)}}>
                    <a href={`#${link.id}`}> {link.title} </a>
                  </li>
                )}
              </ul>
            </m.div>}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}

export default Navbar