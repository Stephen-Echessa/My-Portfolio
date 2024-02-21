import React from 'react';
import ProjectItem from './ProjectItem';
import movie from '../assets/movie.png';
import ecommerce from '../assets/ecommerce.png';
import logistics from '../assets/logistics.png';
import payment from '../assets/payment.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
        In my github, you'll find a compilation of projects I've undertaken, spanning client-based work and personal coding interests. Each project reflects my commitment to excellence and innovation in coding, showcasing a diverse range of skills and experiences.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={movie} title='Movie App' language='ReactJs' link='https://moviesdiscovery.netlify.app' />
            <ProjectItem img={ecommerce} title='ecommerce' link='https://shopperslide.netlify.app/' language='ReactJS' />
            <ProjectItem img={logistics} title='Logistics' language='ReactJS' />
            <ProjectItem img={payment} title='Payment' link='https://moneysetter.netlify.app' language='ReactJS' />
        </div>

        <p className='text-center py-8'>
        If you'd like to see more of my work, feel free to check out my &nbsp;
          <a href='https://github.com/albanusCode' target='_blank'>
            <button className='bg-orange-400 px-4 py-1 text-white hover:bg-orange-800 rounded-lg'>
              Github
            </button>
          </a>
        </p>

    </div>
  )
}

export default Projects