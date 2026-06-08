import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: 'May 2025',
        title: 'AI Automation Engineer',
        duration: 'Present',
        details: "During my time at Zynamis as an AI Engineer, I built an AI-driven chatbot for Pesha, an expense management platform, delivering real-time financial insights and automated report generation. I also engineered an AI-powered geek culture trivia platform for MovieJabber using context-aware prompting and RAG to accelerate generation and support community customization. Alongside this, I developed and executed over 100 automated test scripts, uncovering more than 300 critical UI and functionality issues across clients such as Century Cinemax, Watu Credit, and Cars 360."
    },    
    {
        year: 'October, 2025',
        title: 'Data Analyst',
        duration: '9 months',
        details: 'During my time at Pula Advisors, I collaborated with professionals to map farm polygons across various districts in Uganda using QGIS, successfully and constantly achieving the company’s weekly target of 100,000 farms while enhancing the quality of geospatial analysis. Another main role was analyzing extensive datasets of mapped farms using Python Notebooks and Excel, delivering insights that optimized agricultural insurance offerings and ensured favorable outcomes for smallholder farmers.'
    },
    {
        year: 'August, 2024',
        title: 'AI Engineer',
        duration: '8 months',
        details: 'During my tenure at Ebikes Africa, I led the development of an AI-driven WhatsApp chatbot, enhancing customer interaction and support capabilities. Additionally, I deployed robust web applications and the AI assistant to AWS, while still leveraging MySQL and PostgresSQL for data storage and memory management. Another role was conducting extensive research and provided strategic recommendations on emerging technologies and tools, accelerating the project’s completion by 20% and improving overall team productivity.'
    
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