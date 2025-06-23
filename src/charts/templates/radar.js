export const radar = {
  options: {
    chart: {
      id: 'radar-chart',
      type: 'radar',
    },
    xaxis: {
      categories: ['Math', 'Science', 'English', 'History', 'Art'],
      labels: {
        style: {
          colors: 'hsl(227.1 45.9% 78.2%)',
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#ffff'
        }
      }
    }
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
