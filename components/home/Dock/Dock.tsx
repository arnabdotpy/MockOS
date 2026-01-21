"use client";
import React, { useState } from 'react';
import { Dock } from 'react-osx-dock';
import CodeBox from '../CodeBox/CodeBox';

const DockMain = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true); // Initially hidden

  const toggleWindow = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div>
      {/* Pass isClosed and toggleWindow to CodeBox */}
      <CodeBox toggleWindow={toggleWindow} isClosed={isClosed} />

      <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2">
        <Dock itemWidth={50} magnification={1} magnifyDirection="up">
          {['finder', 'slack', 'spotify', 'guitar-pro', 'terminal', 'trash'].map((letter) => (
            <img
              className="letter"
              src={`${letter}.png`}
              onClick={() => {
                if (letter === 'finder') {
                  window.location.href = "https://www.apple.in";
                } else if (letter === 'slack') {
                  window.location.href = "https://www.slack.com";
                } else if (letter === 'spotify') {
                  window.location.href = "https://www.spotify.com";
                } else if (letter === 'guitar-pro') {
                  window.location.href = "https://www.image-line.com/";
                } else if (letter === 'terminal') {
                  toggleWindow();
                } else if (letter === 'trash') {
                  window.location.href = "https://www.youtube.com";
                }
              }}
              key={letter}
              alt={`${letter} icon`}
            />
          ))}
        </Dock>
      </div>
    </div>
  );
};

export default DockMain;
