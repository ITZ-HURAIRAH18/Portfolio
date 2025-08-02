import React from "react";
import resume from '../logo/Cv_with_pic.pdf'
import {link} from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative flex flex-col space-y-4 p-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl">
      <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
        Hello <span className="text-emerald-500 dark:text-emerald-400 font-bold">I am</span>
      </p>

      <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        M Abu Hurairah
      </h2>
      <h3 className="text-xl font-mono font-semibold text-gray-600 dark:text-gray-400">
        Full Stack Developer with React and Django
      </h3>
      <p className="max-w-xl font-serif text-gray-800 dark:text-gray-400 leading-relaxed">
        I can help you build user-focused websites and applications that will increase business
        productivity, actuate competitive advantages and revenue growth. Take a look at some of my
        work and experience! If you like what you see and have a project you need coded,
        don’t hesitate to contact me.
      </p>
      <div className="flex space-x-5 mt-6">
        <a
          href={resume}
          download
          className="px-6 py-2 text-sm font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
            bg-gradient-to-r from-emerald-500 to-green-500 text-white
            hover:from-emerald-600 hover:to-green-600 hover:shadow-xl"
        >
          Download Resume
        </a>

        <a
          href="/message"
          className="px-6 py-2 text-sm font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105
            bg-white text-emerald-600 border border-emerald-500 dark:bg-gray-800 dark:text-emerald-400 dark:border-emerald-400
            hover:bg-emerald-50 hover:shadow-md dark:hover:bg-gray-700"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Banner;