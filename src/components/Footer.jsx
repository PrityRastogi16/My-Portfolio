import React from 'react';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillCode,
    AiOutlineArrowUp,
  } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={"https://avatars.githubusercontent.com/u/128986644?s=400&u=c03eea92aa074f87c4906568961b679a020d7079&v=4"} alt="" />
            <h2>Prity Rastogi</h2>
            <p>Step by Step one walk far</p>
        </div>
        <aside>
          <h2>Social Media</h2>
          <article>
            <a href="https://github.com/PrityRastogi16" target ={"blank"}><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/prity-rastogi-693074249/" target ={"blank"}><AiFillLinkedin /></a>
            <a href="https://leetcode.com/Prity_Rastogi/" target ={"blank"}><AiFillCode /></a>
          </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  )
}

export default Footer
