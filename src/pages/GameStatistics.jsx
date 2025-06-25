// Components
import UserNameSteamIdForm from '@/features/GameStatistics/userNameForm/components/UserSteamIdForm';
import Dashboard from '@/features/GameStatistics/Dashboard/Dashboard';
import UserSteamGameForm from '@/features/GameStatistics/userNameForm/components/userSteamGameForm';
import AnimatedButton from '@/components/AnimatedButton';
import Loader from '@/components/ui/loader';

// JOTAI
import { useAtom } from 'jotai';
import { steamDataJotai } from '@/features/GameStatistics/stores/steamData.jotai';

// Framer motion
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GameStatistics() {
  const [steamData] = useAtom(steamDataJotai);
  const [isActive, setIsActive] = useState(false);
  const [load, setLoad] = useState(false);

  const handleClick = async () => {
    if (!steamData.steamID || !steamData.appID) {
      console.log('1');
      return;
    }

    try {
      setLoad(true);
      const response = await fetch(
        `http://localhost:3000/steam/userstats?steamid=${steamData.steamID}&appid=${steamData.appID}`
      );

      const data = await response.json();
      console.log(data);
      setIsActive((prev) => !prev);

      setLoad(false);
    } catch (error) {
      console.error('Error: ' + error.message);
    }
  };

  return (
    <div className="flex m-auto">
      {load ? (
        <Loader />
      ) : (
        <div>
          {isActive ? (
            <Dashboard />
          ) : (
            <section className="p-10 flex flex-col items-center m-auto gap-2">
              <motion.div variants={container} initial="hidden" animate="visible" className="flex">
                {"Here you can track your steam games' data".split('').map((char, index) => (
                  <motion.span key={index} variants={child} className="text-3xl">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex gap-x-2">
                <UserNameSteamIdForm />
                <UserSteamGameForm />
                <AnimatedButton onClick={handleClick}>Click</AnimatedButton>
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
