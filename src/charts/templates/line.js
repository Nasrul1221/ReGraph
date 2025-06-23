export const line = {
  options: {
    chart: {
      id: 'line-bar',
      type: 'line',
      zoom: {
        enabled: false,
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
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],

  height: 350,
  width: 700,
};
