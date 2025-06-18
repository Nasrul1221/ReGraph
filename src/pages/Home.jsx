import React from 'react';
import Chart from 'react-apexcharts';
import { options, series } from './homePageData/data';

export default function Home() {
  return (
    <div className="flex flex-1 items-center relative">
      <div className="flex flex-col justify-center items-center m-auto">
        <h1 className="text-4xl font-bold text-foreground mb-5">Welcome to ReGraph!</h1>
        <Chart options={options} series={series} type="area" height={350} width={500} />
      </div>
    </div>
  );
}
