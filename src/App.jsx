import { useState, useRef } from 'react';
import { GameStateContext } from './helpers/Contexts';
import './App.css';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import { motion } from 'framer-motion';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [emptyInput, setEmptyInput] = useState(true);
  const [userName, setUserName] = useState('');
  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
        emptyInput,
        setEmptyInput,
        userName,
        setUserName,
      }}
    >
      {emptyInput ? (
        <div className='w-full bg-green-300 h-screen flex flex-col items-center justify-center gap-10 transition duration-[1000ms]'>
          <motion.div
            animate={{
              y: [400, 0],
              opacity: [0, 1],
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
              delay: 0.5,
            }}
          >
            <h1 className='text-4xl font-semibold'>Quiz App</h1>
          </motion.div>

          {gameState === 'menu' && <Menu />}
          {gameState === 'playing' && <Quiz />}
        </div>
      ) : (
        <div className='w-full bg-red-300 h-screen flex flex-col items-center justify-center gap-10 transition duration-[1000ms]'>
          <h1 className='text-4xl font-semibold'>Quiz App</h1>
          {gameState === 'menu' && <Menu />}
        </div>
      )}
    </GameStateContext.Provider>
  );
}

export default App;
