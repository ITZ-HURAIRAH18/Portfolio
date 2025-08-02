import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { projects } from "../functions/projects";

const Project = () => {
  // A simple array to provide titles for each project category
  const projectCategories = [
    "Frontend Development",
    "Data Analytics",
    "Full Stack Development",
  ];

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen">
      <Navbar color="bg-gray-900" />
      
      <div className="pt-24 px-5 md:px-10">
        {projects.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h1 className="font-bold text-[25px] dark:text-white">
              {projectCategories[categoryIndex]}
            </h1>
            
            <div className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              lg:grid-cols-3 
              gap-x-5 
              my-8 
              gap-y-5
            ">
              {category.map((data, index) => (
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
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Project;