import { useState, useRef } from "react"
import { motion as m } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

// template_lyd8fo8
// service_tgktqel
// ByxRuse2NM1sQ9O57

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '', 
    email: '', 
    message: '' 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_tgktqel', 'template_lyd8fo8', {
      from_name: form.name,
      to_name: 'Temidire',
      from_email: form.email,
      to_email: 'temidireowoeye@gmail.com', 
      message: form.message
    },
    'ByxRuse2NM1sQ9O57'
  ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({ name: '', email: '', message: '' });
  }, (error) => {setLoading(false); alert('An error occurred. Please try again later.'); console.log(error)});
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <m.div variants={slideIn('left', "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3>Contact.</h3>
        
        <form ref={formRef} className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
          <label htmlFor="name" className="flex flex-col" >
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" id="name" value={form.name} onChange={handleChange} placeholder="What's your name?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label htmlFor="email" className="flex flex-col" >
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="text" name="email" id="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <label htmlFor="message" className="flex flex-col" >
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={'7'} name="message" id="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
          </label>

          <button type="submit" className="bg-tertiary self-center w-full py-3 px-8 outline-none text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </m.div>

      <m.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </m.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, "contact")

export default WrappedContact