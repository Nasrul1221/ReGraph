export const radialBar = {
  options: {
    chart: {
      id: 'radialBar-chart',
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'Total',
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
