import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 'Nov, 2023',
        title: 'Software Developer',
        duration: '3 months',
        details: 'During my tenure at EastBerry Limited, I held an entry-level position in front-end development, contributing remotely for a brief yet impactful period. In this role, I gained valuable experience in crafting user-facing interfaces and implementing front-end solutions while collaborating effectively within a remote team environment. This opportunity sharpened my skills in web development and honed my ability to adapt to diverse work settings, solidifying my commitment to continuous growth and proficiency in front-end technologies.'
    
    },
    {
        year: 'May, 2023',
        title: 'Internship',
        duration: '3 months',
        details: 'During my internship at Jeilo Collections, I focused on developing an efficient inventory management system tailored to the company\'s needs. Through analysis and collaboration, I designed and implemented a user friendly solution that optimized inventory tracking, reduced discrepancies, and facilitated seamless replenishment cycles, ultimately contributing to the organization\'s operational effectiveness and success.'
    
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
        <h1 className='text-4xl font-bold text-center text-gray-600'>Work</h1>
        {
            data.map((item, idx) => (
                <WorkItem
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    duration={item.duration} 
                    details={item.details}
                />
            ))
        }
    </div>
  )
}

export default Work