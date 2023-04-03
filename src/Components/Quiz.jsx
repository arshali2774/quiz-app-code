import { GameStateContext } from '../helpers/Contexts';
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Questions } from '../helpers/Questions';

const Quiz = () => {
  const {
    gameState,
    setGameState,
    emptyInput,
    setEmptyInput,
    userName,
    setUserName,
  } = useContext(GameStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const chooseOption = (option) => {
    setOptionChosen(option);
  };
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setCurrentQuestion((oldVal) => oldVal + 1);
    } else {
    }
  };
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 1,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      initial={{
        borderRadius: ['20%'],
        // opacity: 0,
      }}
      animate={
        {
          // opacity: 1,
        }
      }
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      className='bg-fuchsia-900 w-1/2 h-1/2 text-emerald-400 text-xl p-4 drop-shadow-4xl box-border flex justify-center items-start'
    >
      <motion.form
        className='flex flex-col justify-evenly items-center gap-4 h-full'
        variants={container}
        initial='hidden'
        animate='show'
        action='#'
        preventDefault
      >
        <motion.label variants={item} htmlFor='name' className='box-border'>
          Welcome {userName}
        </motion.label>{' '}
        <motion.div
          variants={item}
          className='bg-black rounded-lg px-4 py-2 focus:outline-none focus:border border-emerald-400 box-border text-center invalid:border-red-500 flex flex-col justify-evenly h-full'
        >
          <h1>{Questions[currentQuestion].prompt}</h1>
          <div className='options flex flex-col gap-4 cursor-pointer'>
            <button
              className='hover:bg-emerald-400 hover:text-black rounded-md py-2 transition duration-500'
              onClick={() => {
                chooseOption('optionA');
              }}
            >
              {Questions[currentQuestion].optionA}
            </button>
            <button
              onClick={() => {
                chooseOption('optionB');
              }}
              className='hover:bg-emerald-400 hover:text-black rounded-md py-2 transition duration-500'
            >
              {Questions[currentQuestion].optionB}
            </button>
            <button
              onClick={() => {
                chooseOption('optionC');
              }}
              className='hover:bg-emerald-400 hover:text-black rounded-md py-2 transition duration-500'
            >
              {Questions[currentQuestion].optionC}
            </button>
            <button
              onClick={() => {
                chooseOption('optionD');
              }}
              className='hover:bg-emerald-400 hover:text-black rounded-md py-2 transition duration-500'
            >
              {Questions[currentQuestion].optionD}
            </button>
          </div>
        </motion.div>
        <motion.button
          variants={item}
          className='box-border'
          onClick={nextQuestion}
        >
          Next Question
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
export default Quiz;
