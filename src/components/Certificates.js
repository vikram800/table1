import React from 'react';

const Certificates = () => {
  const certificates = [
    { title: 'Build Your Own Static Website', link: 'https://certificates.ccbp.in/intensive/static-website?id=FOFOBYADMY' },
    { title: 'JavaScript', link: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=KPCURXGSSJ' },
    { title: 'React Js', link: 'https://certificates.ccbp.in/intensive/react-js?id=KMHZHKECCT' },
    { title: 'SQL', link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=NGNBLQISUT' },
    { title: 'Python', link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=DVPBUAJVGK' }
  ];

  return (
    <section id="certificates" className="certificates-section py-10 bg-gray-100 text-center m-4">
      <h2 className="text-3xl font-bold mb-6">Certificates</h2>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-6 justify-center">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md w-full sm:w-1/2 lg:w-1/3">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
