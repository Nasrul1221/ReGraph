export const column = {
  options: {
    chart: {
      id: 'column-chart',
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false,
      },
    },
    legend: {
      labels: {
        colors: 'hsl(227.1 45.9% 78.2%)'
      }
    },
    grid: {
      borderColor: "hsl(227.1 45.9% 78.2%)"
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: 'hsl(227.1 45.9% 78.2%)'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'hsl(227.1 45.9% 78.2%)'
        }
      }
    }
  },
  series: [
    
  ],
  height: 350,
  width: 700,
};
