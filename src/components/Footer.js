import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
       
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Vikram's Portfolio. All rights reserved.</p>
        </div>
        
        
        <div className="flex justify-center space-x-4 mb-4 md:mb-0">
          <a href="https://www.linkedin.com/in/vikrammeka/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            LinkedIn
          </a>
          <a href="https://github.com/vikram800/Vikram123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
            GitHub
          </a>
         
        </div>

       
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#home" className="hover:text-gray-200 cursor-pointer">Home</a>
          <a href="#about" className="hover:text-gray-200 cursor-pointer">About</a>
          <a href="#contact" className="hover:text-gray-200 cursor-pointer">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
