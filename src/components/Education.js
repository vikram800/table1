import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'SBIT COLLEGE OF ENGINEERING',
      degree: 'EEE Engineering',
      Location:"Khammam"
      
    },
    {
      institution: 'RESONANCE JUNIOR COLLEGE',
      degree: '+2 - MPC',
      Location:"Khammam"
     
    },
    {
      institution: 'ZPSS HIGH SCHOOL',
      degree: 'SSC',
      Location:"Vepakuntla"
      
    },
  ];

  return (
    <section id="education" className="education-section py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-lg font-medium">{edu.degree}</p>
              <p className="text-gray-600">{edu.Location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
