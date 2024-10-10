// "use client";
// import React, { useState } from 'react';
// import DockMain from '../Dock/Dock';  // Dock component
// import CodeBox from './CodeBox';    // Terminal window component

// const App = () => {
//   const [isTerminalClosed, setIsTerminalClosed] = useState<boolean>(false);  // Track the terminal window state

//   return (
//     <div>
//       {/* Render the CodeBox (Terminal) and pass the state to control its visibility */}
//       <CodeBox isClosed={isTerminalClosed} setIsClosed={setIsTerminalClosed} />

//       {/* Render the Dock and pass the function to open the terminal */}
//       <DockMain openTerminal={() => setIsTerminalClosed(false)} />
//     </div>
//   );
// };

// export default App;
