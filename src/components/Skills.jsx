import React from 'react'
import {motion} from "framer-motion";
// import {AiFillIeCircle} from "react-icons/ai";

const Skills = () => {
  return (
    <div id="services">
        <h2>Skills</h2>
      <section>
        <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>HTML5</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>CSS</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>Javscript</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>React</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>JAVA</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>Github</span>
          </motion.div>
          <motion.div className='serviceBox'>
            {/* <AiFillIeCircle /> */}
            <span>DSA</span>
          </motion.div>
      </section>
    </div>
  )
}

export default Skills
