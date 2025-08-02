import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Zap } from 'lucide-react'; // Using lucide-react for icons
// Correctly assigning the image URL to a constant variable
import image from '../logo/my-photo.jpg';
const About = () => {
  return (
    <>
      <Navbar color="bg-gray-900" />
      <div className="bg-white dark:bg-gray-800 min-h-screen py-24 px-6 md:px-16 lg:px-24 transition-all duration-500">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left: Text */}
          <div className="space-y-6 animate-fade-in-up order-2 lg:order-1 flex-grow">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">About Me</h1>
            <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300">
              Hey, I&apos;m Abu Hurairah! A passionate full-stack developer focused on backend development. 
              This is my personal space to showcase projects, experiments, and tutorials. 
              Explore the projects page to see my work and visit the blog to dive into insights and learnings.
            </p>

            <p className="max-w-xl text-gray-700 dark:text-gray-300 flex items-center space-x-2">
              <Mail className="h-10 w-9 text-emerald-500" />
              <span>
                You can reach me at <a href="mailto:abuhurairahdev@gmail.com" className="text-emerald-500 hover:underline transition-colors" target="_blank" rel="noreferrer">muhammadabuhurairah22@gmail.com</a> 
                or just <NavLink className="text-emerald-500 hover:underline transition-colors" to="/message">say hi here</NavLink>. I always enjoy meeting new minds in tech!
              </span>
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full max-w-sm lg:w-96 lg:h-96 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 order-1 lg:order-2">
            <img src={image} alt="Abu Hurairah" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-16 space-y-6 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
            <Zap className="h-7 w-7 text-emerald-500" />
            <span>Fun Facts</span>
          </h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 max-w-xl">
            <li>I specialize in Django, REST APIs, and React.</li>
            <li>I enjoy solving real-world problems with clean code and smart design.</li>
            <li>Open-source lover, automation geek, and always learning!</li>
            <li>I enjoy mentoring juniors and building communities in tech.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;