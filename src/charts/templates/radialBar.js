export const radialBar = {
  options: {
    chart: {
      id: 'radialBar-chart',
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: "hsl(227.1 45.9% 78.2%)",
            fontSize: '20px',
          },
          value: {
            color: 'hsl(227.1 45.9% 78.2%)'
          },
          total: {
            show: true,
            label: 'Total',
            color: 'hsl(227.1 45.9% 78.2%)',
            formatter: function () {
              return 249;
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas'],
  },
  series: [44, 55, 41],
  height: 350,
  width: 700,
};
