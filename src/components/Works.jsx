import { Tilt } from "react-tilt";
import { motion as m } from 'framer-motion';
import { FaLink } from "react-icons/fa6";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import PropTypes from "prop-types";

const ProjectCard = ({index, name, description, tags, image, source_code_link, site_link}) => {
  return (
    <m.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="w-full relative h-[200px]">
          <img src={image} alt={name} className="w-full h-full rounded-2xl"/>
          <div className="absolute inset-0 flex justify-end gap-x-2 m-3 card-img_hover">
            <div onClick={() => window.open(site_link, "_blank")} 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <FaLink className="text-white text-[20px]" />
            </div>
            <div onClick={() => window.open(source_code_link, "_blank")} 
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} className="w-1/2 h-1/2 object-contain" alt="github" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </m.div>
  )
}

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  site_link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired
};

const  Works = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} `}>
          Projects.
        </h2>
      </m.div>

      <div className="w-full flex">
        <m.p variants={fadeIn("","", 1.0, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following works showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to github repositories and live demos. 
          It reflects my ability to solve complex problems, work with different technologies and manage projects from start to finish.
        </m.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

const WrappedWorks = SectionWrapper(Works, 'works');

export default WrappedWorks