import React from 'react';
import Chart from 'react-apexcharts';
import { options, series } from './homePageData/data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gamepad, ChartLine, MoveRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Components
import AnimatedButton from '@/components/AnimatedButton';

// Styles
import { buttonsStyle } from '@/styles/styles';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center relative">
      <div className="flex gap-5">
        {buttons.map((item, index) => (
          <motion.div
            variants={buttonContainer}
            initial="hidden"
            animate="visible"
            key={index}
            className="bg-secondary rounded-[10px] p-4 mt-4 flex flex-col gap-2 items-center"
          >
            <motion.h3 className="flex gap-2 text-secondary-foreground">
              <item.icon className="text-highlight-secondary" />
              {item.label}
            </motion.h3>
            <AnimatedButton
              className="flex p-2 rounded gap-2 bg-gradient-to-r from-linearL to-linearR"
              asChild
            >
              <NavLink to={item.path}>
                {item.buttonLabel}
                <MoveRight />
              </NavLink>
            </AnimatedButton>
          </motion.div>
        ))}
      </div>
      <motion.div
        whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="flex flex-col justify-center items-center m-auto bg-secondary p-8 rounded-[10px]"
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="flex mb-10">
          {'ReGraph - is your tool to monitor data'.split('').map((char, index) => (
            <motion.span key={index} variants={child} className="text-3xl">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
        <Chart options={options} series={series} type="area" height={350} width={500} />
      </motion.div>
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
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 8,
    },
  },
};

const buttons = [
  {
    label: 'Create chart',
    buttonLabel: 'Get started',
    icon: ChartLine,
    path: 'create-chart',
  },
  {
    label: 'Track your game stats',
    buttonLabel: 'Get started',
    icon: Gamepad,
    path: 'not-found',
  },
];

const buttonContainer = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 8,
    },
  },
};
