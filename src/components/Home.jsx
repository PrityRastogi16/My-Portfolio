import React from 'react'
import {motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUp, BsChevronDown} from "react-icons/bs";
import me from "../assets/imageme.jpg"

const Home = () => {
    const animations = {
        h1:{
            initial:{
              x:"-100%",
                opacity:0,
               },
             whileInView:{
               x:0, 
               opacity:1,                   },
            },
            button:{
                initial:{
                  y:"-100%",
                    opacity:0,
                   },
                 whileInView:{
                   y:0, 
                   opacity:1,                   }
                }
        };
  return (
    <div id="home">
      <section>
        <div>
           <motion.h1 {...animations.h1}>   
            Hi, I Am <br /> Prity Rastogi
           </motion.h1>  
           <p>I'm a passionate Full Stack Web Developer currently in the learning phase.<br/>
            I’m continuously learning new languages, frameworks, and technologies.</p>

           <Typewriter options={{
            strings:["A Frontend Developer"],
            autoStart:true,
            loop:true,
            cursor:"",
            wrapperClassName:"typewriterpara",
           }} />

           <div>
           <a href="mailto:prityss7991@gmail.com">
            Hire Me
           </a>
           <a href="#work"> Projects Done <BsArrowUp /></a>
           </div>
           <aside>
           <article data-special>
            <p>Contact</p>
            <span>prityss7991@gmail.com</span>
           </article>

           </aside> 
        </div>
      </section>
      <section>
        <img src={me} alt="Prity" />
      </section>
      <BsChevronDown />
    </div>
  )
}

export default Home
