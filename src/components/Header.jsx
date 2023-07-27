import React from 'react'

const Header = () => {
  return (
     <nav>
    <NavContent />
   </nav>
   )
  
};
const NavContent = ()=>(
    <>
    <h2>Prity Rastogi</h2>
    <div>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#services">Skills</a>
        <a href="#contact">Contact</a>
    </div>
    <a href="mailto:prityss7991@gmail.com"><button>Email</button></a>
    </>
)

export default Header
