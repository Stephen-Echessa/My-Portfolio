import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 2020,
        title: 'Developer',
        duration: '3 months',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    
    },
    {
        year: 2020,
        title: 'Developer',
        duration: '3 months',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    
    },
    {
        year: 2020,
        title: 'Developer',
        duration: '3 months',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    
    },
    {
        year: 2020,
        title: 'Developer',
        duration: '3 months',
        details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy'
    
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