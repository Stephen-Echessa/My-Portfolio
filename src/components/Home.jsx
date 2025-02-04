import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import logo from '../assets/logo.png'

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 16) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

const Home = () => {
  const greeting = getGreeting();

  return (
    <div id='main' className='max-w-[1130px]'>
      <div className='md:hidden py-4 md:p-2 w-[100%] bg-gray-700 fixed z-50'>
        <img src={logo} 
            alt=""
            className='w-[10%] ml-4 border border-gray-50 rounded-full' 
          
          />
      </div>
      
      <img
        src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b952w5q68bly91f9je2t3fqx70lo718ykqfmtv72oauh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        className='w-full h-screen object-cover object-left'
        alt=""
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-white'>
          <h1 className='text-2xl'>{greeting}</h1>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-300'>I'm Stephen Echessa</h1>
          <h2 className='flex sm:text-3xl text-2xl'>
            I'm
            <TypeAnimation
              sequence={[
                'a Data Scientist',
                2000,
                'a Machine Learning Engineer',
                2000,
                'an AI Solutions Developer',
                2000,
                'a Python Programmer',
                2000,
              ]}
              wrapper='span'
              speed={50}
              style={{
                fontSize: '1em',
                display: 'inline-block',
                paddingLeft: '5px',
                color: 'white',
              }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href="https://x.com/chescore254?t=w0kmkB-FlHQND60oAnsXGg&s=09" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className='cursor-pointer hover:text-blue-400' size={20}/>
            </a>
            <a href="https://github.com/Stephen-Echessa" target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer hover:text-gray-600' size={20} />
            </a>
            <a href="https://www.linkedin.com/in/stephen-echessa-621906262/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='cursor-pointer hover:text-blue-400' size={20} />
            </a>
            <a href="https://medium.com/@stevechesa" target="_blank" rel="noopener noreferrer">
              <FaMedium className='cursor-pointer hover:text-blue-400' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;