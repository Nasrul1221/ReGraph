export const donut = {
  options: {
    chart: {
      id: 'donut-chart',
      type: 'donut',
    },
    labels: ['Team A', 'Team B', 'Team C'],
    legend: {
      labels: {
        colors: 'hsl(227.1 45.9% 78.2%)'
      }
    }
  },
  series: [25, 50, 25],
  height: 350,
  width: 700,
};