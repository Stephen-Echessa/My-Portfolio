import React from 'react';
import chatbot from '../assets/chatbot.png';
import property from '../assets/property.png';
import scraper from '../assets/scraper.png';
import lyrai from '../assets/lyrai.png';

const projectList = [
  {
    img: chatbot,
    title: 'Self-care Assistant Chatbot',
    language: 'Langgraph, Tavily, SQLite, Streamlit',
    link: 'https://huggingface.co/spaces/chescore/Wellbeing-Companion-with-Langgraph'
  },
  {
    img: property,
    title: 'Nairobi Property Price Predictor',
    language: 'Python, Beautiful Soup, LightGBM',
    link: 'https://huggingface.co/spaces/chescore/Nairobi-Property-Price-Predictor'
  },
  {
    img: lyrai,
    title: 'Music AI Analyzer Platform',
    language: 'Python, Langgraph, Gemini',
    link: 'https://github.com/Stephen-Echessa/lyrai'
  },
  {
    img: scraper,
    title: 'Real-Time Property Data Pipeline',
    language: 'Scrapy, Apache Kafka, MySQL',
    link: 'https://github.com/Stephen-Echessa/Web-Scraping-with-Scrapy-Kafka-and-MySQL'
  }
];

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        On my GitHub, you’ll find a collection of projects that highlight my dedication to excellence and innovation in my field. Each project demonstrates a diverse set of skills and experiences, reflecting my passion for pushing boundaries and delivering high-quality results.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='block shadow-lg rounded-xl p-4 hover:scale-105 transition-transform'
          >
            <img
              src={project.img}
              alt={project.title}
              className='rounded-xl w-full h-48 object-cover'
            />
            <div className='py-4'>
              <h3 className='text-lg font-semibold text-[#001b5e]'>{project.title}</h3>
              <p className='text-sm text-gray-600'>{project.language}</p>
            </div>
          </a>
        ))}
      </div>

      <p className='text-center py-8'>
        If you'd like to see more of my work, feel free to check out my &nbsp;
        <a href='https://github.com/Stephen-Echessa' target='_blank' rel='noopener noreferrer'>
          <button className='bg-orange-400 px-4 py-1 text-white hover:bg-orange-800 rounded-lg'>
            Github
          </button>
        </a>
      </p>
    </div>
  );
};

export default Projects;
