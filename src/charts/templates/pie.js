export const pie = {
  options: {
    chart: {
      id: 'pie-chart',
      type: 'pie',
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val
        }
      }
    },
    labels: ['Apple', 'Mango', 'Orange', 'Banana'],
    legend: {
      labels: {
        colors: 'hsl(227.1 45.9% 78.2%)'
      }
    },
    
  },
  series: [44, 55, 13, 43],
  height: 350,
  width: 700,
};