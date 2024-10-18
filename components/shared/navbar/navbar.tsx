"use client";
import React, { useState } from 'react';
import { FaApple, FaFolderOpen, FaCode, FaCogs, FaFileAlt, FaBars, FaSun, FaMoon } from 'react-icons/fa';
import ControlPanel from './ControlPanel';
import Image from 'next/image';

const Navbar = () => {
  const formattedDate = new Date().toLocaleString('en-US', {
    weekday: 'short', 
    month: 'short',  
    day: 'numeric',  
    hour: 'numeric', 
    minute: 'numeric',
    hour12: true     
  });
  
  const [controlPanelOpen, setControlPanelOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 

  const toggleControlPanel = () => {
    setControlPanelOpen(!controlPanelOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);  
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <nav className={`bg-blue-900 bg-opacity-60 backdrop-filter backdrop-blur-xl p-1 w-full fixed top-0 left-1/2 transform -translate-x-1/2 shadow-xl z-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-6 text-white pl-4">
            <FaApple className="text-white text-xl cursor-pointer hover:text-gray-300" />
            <p className="hover:text-blue-500 cursor-pointer">File</p>
            <p className="hover:text-blue-500 cursor-pointer">Edit</p>
            <p className="hover:text-blue-500 cursor-pointer">View</p>
            <p className="hover:text-blue-500 cursor-pointer">Window</p>
            <p className="hover:text-blue-500 cursor-pointer">Workspace</p>
            <p className="hover:text-blue-500 cursor-pointer">Help</p>
          </div>

          
          <div className="flex items-center gap-4 pr-4">
            <button onClick={toggleControlPanel} className="focus:outline-none">
              <Image
                src="/cc.png"
                alt="control center"
                width={30}
                height={30}
                style={{ objectFit: 'contain', padding: 5 }}
                priority
              />
            </button>

          
            <button
              onClick={toggleDarkMode}
              className="text-xl text-white focus:outline-none hover:text-gray-300 transition-all"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <p>{formattedDate}</p>
          </div>
        </div>
      </nav>

      {controlPanelOpen && (
        <div className="fixed top-16 right-8 z-20">
          <ControlPanel />
        </div>
      )}
    </div>
  );
};

export default Navbar;
