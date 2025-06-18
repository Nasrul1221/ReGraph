import React from 'react';
import Chart from 'react-apexcharts';
import { options, series } from './homePageData/data';
import { motion } from 'framer-motion';

export default function Home() {
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

  return (
    <div className="flex flex-1 items-center relative">
      <div className="flex flex-col justify-center items-center m-auto">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex">
          {'ReGraph - is your tool to monitor data'.split('').map((char, index) => (
            <motion.span key={index} variants={child} className="text-3xl">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
        <Chart options={options} series={series} type="area" height={350} width={500} />
      </div>
    </div>
  );
}
