import React from 'react';
import ProjectItem from './ProjectItem';
import movie from '../assets/movie.png';
import ecommerce from '../assets/ecommerce.png';
import logistics from '../assets/logistics.png';
import Dashboard from '../assets/Dashboard.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Incidunt voluptatum consectetur quam repudiandae laudantium 
            vel ea error exercitationem? Beatae accusantium, soluta excepturi 
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={movie} title='Movie App' />
            <ProjectItem img={ecommerce} title='ecommerce' />
            <ProjectItem img={logistics} title='Logistics' />
            <ProjectItem img={Dashboard} title='Dashboard' />
        </div>

    </div>
  )
}

export default Projects