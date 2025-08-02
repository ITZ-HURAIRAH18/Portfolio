import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Card from '../components/Card';
import Service from '../components/Service';
import { service } from '../functions/pictures';
import { feedback } from '../functions/customerFeedback';

const Home = () => {
  return (
    <>
      <Navbar color="bg-gray-800" />
      <div className="mx-auto dark:bg-gray-900 py-16 md:px-16 px-5">
        <Banner />
      </div>
      
      {/* What I do section */}
      <div className="py-5 bg-white dark:bg-gray-900 rounded-md my-5 md:px-20 px-5">
        <div className='text-center flex flex-col space-y-1 my-6'>
          <h2 className="text-gray-800 font-bold dark:text-gray-100">What I do</h2>
          <p className="max-w-sm md:max-w-lg mx-auto font-light text-sm py-2 dark:text-gray-400">
            If you need any help with your software development projects, give me a call. I offer a variety of software development services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-8 gap-y-10 p-4">
          {/* Frontend Development */}
          <Service
            icon="fa-solid fa-code"
            summary="I specialize in building responsive and dynamic user interfaces using modern frontend frameworks like React."
            skill="Frontend"
          />

          {/* Backend Development */}
          <Service
            icon="fa-solid fa-server"
            summary="I develop robust and scalable server-side applications, APIs, and databases using technologies like Django."
            skill="Backend"
          />

          {/* Full Stack Development */}
          <Service
            icon="fa-solid fa-layer-group"
            summary="I provide end-to-end development, handling both the client and server side of applications for a complete solution."
            skill="Full Stack"
          />
        </div>
      </div>
      
      {/* Recent Projects Section */}
      <div className="bg-white dark:bg-gray-900 space-y-3 py-5 md:px-20 px-5">
        <div className='text-center flex flex-col space-y-1 my-6'>
          <h2 className="font-bold text-gray-800 dark:text-white">Recent Projects</h2>
          <p className="max-w-sm md:max-w-lg mx-auto font-light text-sm text-gray-800 dark:text-gray-400">
            I value strong relationships and real-world experience. Though I don’t have clients yet, my project portfolio reflects my technical skills and growth mindset.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 my-8 gap-y-5 justify-center items-center">
          {service.map((data, index) => (
            <Card
              key={index}
              link={data.link}
              skill={data.skill}
              summary={data.summary}
              stack={data.stack}
              tools={data.tools}
              demo={data.demo}
            />
          ))}
        </div>
        <NavLink
          className="text-gray-700 dark:text-gray-300 border flex items-center justify-center border-gray-300 dark:border-gray-700 hover:opacity-90 bg-white dark:bg-gray-700 py-2 w-full text-sm font-medium rounded-md hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white dark:hover:text-white transition-colors"
          to="/projects"
        >
          View all
        </NavLink>
      </div>
      
      {/* Testimonials Section */}
      <div className="py-5 bg-white dark:bg-gray-900 rounded-md my-5 md:px-20 px-5">
        <div className='text-center flex flex-col space-y-2 my-6'>
          <h2 className="text-gray-800 font-bold dark:text-gray-200">TESTIMONIALS</h2>
          <p className="font-bold text-3xl md:text-4xl text-gray-800 dark:text-[#36d8d6e0]">What clients say</p>
          <p className="max-w-sm md:max-w-lg mx-auto font-light text-sm text-gray-800 py-2 dark:text-gray-400">
            I place huge value on strong relationships and have seen the benefit they bring to my business. Customer feedback is vital in helping me to get it right.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-5 my-8 gap-y-5 justify-center items-center">
          {feedback.map((feed, index) => (
            <Testimonial
              key={index}
              image={feed.image}
              alt={feed.alt}
              message={feed.message}
              name={feed.name}
              prof={feed.prof}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
