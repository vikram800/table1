import React from 'react';

function Projects() {
  const projects = [
    { title: "Food Munch", description: "A fully responsive website that offers a comprehensive list of food items and detailed information about each item.Designed to provide the best user experience with HTML structure elements and Bootstrap components. Implemented product videos to give customers a clear view of the food items.Technologies used: HTML, CSS, Bootstrap" },
    { title: "Todos Application", description: "Developed persistent todo application with CRUD operations to track list of tasks Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically byusing JavaScript DOM operations.Used Arrays, Objects and their methods during todolist CRUD Operations, Persisted todo list state on page reloads using local storage methods.Technologies used: HTML, CSS, JS, Bootstrap" },
    { title: "Wikipedia Search Application", description: "A custom wikipedia search application that provides a simplified and intuitive way for users to access and view relevant information. With the ability to easily search for and view curated results, users can dive deeper into their interests with just a click.Streamlined search results with HTML list elements, styled for a modern and user-friendly interface using CSS, Bootstrap and responsive design.Effortlessly access information with asynchronous fetch GET HTTP API calls and the option to open the desired result in a new tab for further exploration.Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap" },
  ];

  return (
    <section id="projects" className="py-20 bg-orange-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {projects.map((project, index) => (
            <div key={index} className="bg-orange-200 p-6 shadow-md rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-4 text-center text-black">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
