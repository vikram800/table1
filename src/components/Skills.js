import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
    { icon: <FaJs className="text-yellow-500" />, name: 'JavaScript' },
    { icon: <FaReact className="text-blue-300" />, name: 'React' },
    { icon: <SiMysql className="text-blue-600" />, name: 'SQL' },
    { icon: <FaPython className="text-green-400" />, name: 'Python' },
  ];

  return (
    <div id="skills" className="skills-section py-7 bg-gray-100 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 py-3 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 m-10">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
