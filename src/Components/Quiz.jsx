import { GameStateContext } from '../helpers/Contexts';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Quiz = () => {
  const {
    gameState,
    setGameState,
    emptyInput,
    setEmptyInput,
    userName,
    setUserName,
  } = useContext(GameStateContext);
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
      className='bg-fuchsia-900 w-1/2 h-1/2 text-emerald-400  text-xl drop-shadow-4xl box-border flex justify-center items-center'
    >
      <motion.form
        className='flex flex-col justify-center items-center gap-4'
        variants={container}
        initial='hidden'
        animate='show'
        action='#'
        preventDefault
      >
        <motion.label variants={item} htmlFor='name' className='box-border'>
          Enter name
        </motion.label>{' '}
        <motion.input
          variants={item}
          type='text'
          name='name'
          placeholder='John Doe'
          required
          autoComplete='off'
          className='bg-black rounded-lg px-4 py-2 focus:outline-none focus:border border-emerald-400 box-border text-center invalid:border-red-500'
        />
        <motion.button variants={item} className='box-border'>
          Start Quiz
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
export default Quiz;
