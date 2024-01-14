import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return 'Good morning';
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
};

const Home = () => {
  const greeting = getGreeting();

  return (
    <div id='main'>
      <img
        src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=6c09b952w5q68bly91f9je2t3fqx70lo718ykqfmtv72oauh&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        className='w-full h-screen object-cover object-left'
        alt=""
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center text-white'>
          <h1 className='text-2xl'>{greeting}</h1>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-300'>I'm Albanus Mutua</h1>
          <h2 className='flex sm:text-3xl text-2xl'>
            I'm a
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'Python programmer',
                2000,
                'Tech Enthusiast',
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
            <FaTwitter className='cursor-pointer hover:text-blue-400' />
            <FaGithub className='cursor-pointer hover:text-gray-600' size={20} />
            <FaInstagram className='cursor-pointer hover:text-red-400' size={20} />
            <FaLinkedin className='cursor-pointer hover:text-blue-400' size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;