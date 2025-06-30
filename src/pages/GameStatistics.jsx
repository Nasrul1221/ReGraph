// Components
import UserNameSteamIdForm from '@/features/GameStatistics/userNameForm/components/UserSteamIdForm';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';
import UserSteamGameForm from '@/features/GameStatistics/userNameForm/components/userSteamGameForm';
import AnimatedButton from '@/components/AnimatedButton';
import Loader from '@/components/ui/loader';

// JOTAI
import { useAtom } from 'jotai';
import { userSteamDataJotai } from '@/features/GameStatistics/stores/userSteamData.jotai';

// Framer motion
import { motion, AnimatePresence } from 'framer-motion';

// Hooks
import useFetchData from '@/hooks/useFetchData';

// React && State
import { useState } from 'react';

export default function GameStatistics() {
  const [userSteamData] = useAtom(userSteamDataJotai);
  const { fetchData, load, isActive, fetchError, setFetchError } = useFetchData();

  const [id, setId] = useState('');
  const [userGame, setUserGame] = useState('');
  const [errors, setErrors] = useState({});

  const handleClick = async () => {
    if (!validate()) {
      return;
    }

    await fetchData();
  };

  const validate = () => {
    const newErrors = {};
    if (!id.trim()) newErrors.id = 'ID!';
    if (!userGame.trim()) newErrors.userGame = 'UserGame!';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="self-center m-auto">
      {load ? (
        <Loader />
      ) : (
        <div className="">
          {isActive ? (
            <Dashboard />
          ) : (
            <section className="p-10 flex flex-col items-center m-auto gap-y-10 justify-center">
              <motion.div variants={container} initial="hidden" animate="visible" className="flex">
                {"Here you can track your steam games' data".split('').map((char, index) => (
                  <motion.span key={index} variants={child} className="text-3xl">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex gap-x-2">
                <UserNameSteamIdForm setId={setId} errors={errors} />
                <UserSteamGameForm setUserGame={setUserGame} />
              </div>
              <AnimatedButton onClick={handleClick}>Find user</AnimatedButton>
              <div className="absolute right-0 overflow-hidden">
                <AnimatePresence>
                  {fetchError && (
                    <motion.div
                      variants={fetchErrorStyle}
                      initial="initial"
                      animate="visible"
                      exit="exit"
                      style={{ backgroundColor: '	rgba(185, 39, 39, 0.4)' }}
                      className="w-[220px] text-center p-5 rounded-l relative"
                    >
                      <div
                        onClick={() => {
                          setFetchError(false);
                        }}
                        className="absolute right-1 top-0 hover:text-gray-400 cursor-pointer transition-all duration-200"
                      >
                        &#10005;
                      </div>
                      <h1 className="font-bold">Error has just occured</h1>
                      <p className="text-[14px]">Please check out your data</p>
                      <div
                        onClick={() => {
                          setFetchError(false);
                        }}
                      ></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1 * i,
    },
  }),
};

const child = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const fetchErrorStyle = {
  initial: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
};
