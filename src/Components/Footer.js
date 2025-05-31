import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"
import { AiFillMediumSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Yakshrajsinh Gohil</h4>
      <h4>Copyright &copy; 2025 YG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Yakshrajsinh" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/yakshrajgohil" target='_blank'><FaLinkedin/></a>
        <a href='yakshrajgohil005@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer