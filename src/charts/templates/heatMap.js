export const heatmap = {
  options: {
    chart: {
      id: 'heatmap-chart',
      type: 'heatmap',
    },
    xaxis: {
      labels: {
        style: {
          colors: 'hsl(227.1 45.9% 78.2%)'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'hsl(227.1 45.9% 78.2%)',
          fontSize: '18px'
        }
      }
    },
  },
  series: [
    {
      name: 'Metric 1',
      data: [80, 70, 60, 90, 100],
    },
  ],
  height: 350,
  width: 700,
};