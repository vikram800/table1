import React from 'react';
import { FaGithub, FaLinkedin,  } from 'react-icons/fa';

function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gray-100 bg-[url('https://img.freepik.com/free-photo/3d-rendering-kid-playing-digital-game_23-2150898496.jpg?t=st=1725279498~exp=1725283098~hmac=4b86d71ff0e349fa2cb0b1d6c561325530040915e552a0293f959bc0572d5ceb&w=740')] bg-cover bg-center">
      <div className="text-left">
        
        <h1 className="text-5xl font-bold text-white mb-4 text-left">Hi, I'm VIKRAM</h1>
        <p className="text-lg text-white mb-8 text-left">I'm a Software Engineer specializing in front-end development.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/vikram800/Vikram123" className="text-2xl text-white hover:text-white"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vikrammeka/" className="text-2xl text-white hover:text-blue-900"><FaLinkedin /></a>
          
        </div>
      </div>
    </section>
  );
}

export default Home;
