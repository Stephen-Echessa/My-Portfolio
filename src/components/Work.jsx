import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 'August, 2024',
        title: 'NLP Engineer',
        duration: 'Present',
        details: 'During my internship at Ebikes Africa, I contributed to the development of an AI-driven WhatsApp chatbot, enhancing customer interaction and support capabilities. Additionally, I conducted extensive research and provided strategic recommendations on emerging technologies and tools, accelerating the project’s completion by 20% and improving overall team productivity'
    
    },
    {
        year: 'July, 2024',
        title: 'Machine Learning Engineer',
        duration: '3 months',
        details: 'During my tenure at Omdena, I collaborated remotely with experienced machine learning engineers and data scientists, significantly enhancing my expertise in advanced machine learning and data science methodologies. Developed high-accuracy deep learning models using ConvLSTM, achieving an R² score of 0.87, to improve weather forecasting for Tanzania, enabling more precise predictions and potentially benefiting millions in agricultural and disaster preparedness sectors.'
    
    },
    {
        year: 'June, 2023',
        title: 'Data Analyst',
        duration: '3 months',
        details: 'During my internship at the Geothermal Development Company of Kenya, I developed data-driven solutions to boost vehicle allocation to Geothermal sites, resulting in an increase in fleet availability from 66% to 82%. Furthermore, conducted in-depth cost analysis with Pandas to optimize vehicle-related expenditures including acquisition costs, maintenance expenses, and fuel consumption patterns, saving KES 1.5 million in the monthly budget. Utilized advanced data visualization techniques to develop interactive dashboards and reports, facilitating informed decision-making and seamless operation.'
    }
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