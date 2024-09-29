import React from 'react';
import ProjectItem from './ProjectItem';
import chatbot from '../assets/chatbot.png';
import property from '../assets/property.png';
import scraper from '../assets/scraper.png';
import sentiment from '../assets/sentiment.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-4'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
        On my GitHub, you’ll find a collection of projects that highlight my dedication to excellence and innovation in my field. Each project demonstrates a diverse set of skills and experiences, reflecting my passion for pushing boundaries and delivering high-quality results.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={property} title='Nairobi Property Price Predictor' link='https://huggingface.co/spaces/chescore/Nairobi-Property-Price-Predictor' language='Python, Beautiful Soup, LightGBM' />
            <ProjectItem img={sentiment} title='Sentiment Analyzer' link='https://stevechesa-movie-review-sentiment-analyzer.streamlit.app/' language='Python, Bert Transformer' />
            <ProjectItem img={chatbot} title='Therapy Chatbot Assistant' language='Langchain, Weaviate, Chainlit' link='https://github.com/Stephen-Echessa/Therapy-Chatbot-with-Mistral-Langchain-Chainlit' />
            <ProjectItem img={scraper} title='Scrapy with Apache Kafka' link='https://github.com/Stephen-Echessa/Web-Scraping-with-Scrapy-Kafka-and-MySQL' language='Scrapy, Apache Kafka, MySQL' />
        </div>

        <p className='text-center py-8'>
        If you'd like to see more of my work, feel free to check out my &nbsp;
          <a href='https://github.com/Stephen-Echessa' target='_blank'>
            <button className='bg-orange-400 px-4 py-1 text-white hover:bg-orange-800 rounded-lg'>
              Github
            </button>
          </a>
        </p>

    </div>
  )
}

export default Projects