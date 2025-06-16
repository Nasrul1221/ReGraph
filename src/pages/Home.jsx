import React from 'react';
import Chart from 'react-apexcharts';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center m-auto">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-grayText to-primary text-transparent bg-clip-text animate-blur">
        Welcome to ReGraph!
      </h1>
      <p className="text-3xl text-wrap w-[590px] font-bold bg-gradient-to-r from-grayText to-primary text-transparent bg-clip-text my-10 animate-blur">
        Your personal dashboard for creating and analyzing graphs easily and beautifully.
      </p>
      <img src="/chart.svg" width={500} />
    </div>
  );
}
