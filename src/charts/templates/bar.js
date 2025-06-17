export const bar = {
  options: {
    chart: {
      id: 'bar-chart',
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
  height: 350,
  width: 700,
};
