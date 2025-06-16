export const radar = {
  options: {
    chart: {
      id: 'radar-chart',
      type: 'radar',
    },
    xaxis: {
      categories: ['Math', 'Science', 'English', 'History', 'Art'],
    },
  },
  series: [
    {
      name: 'Student A',
      data: [80, 50, 30, 40, 100],
    },
  ],
  height: 350,
  width: 700,
};
