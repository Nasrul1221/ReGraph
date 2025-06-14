export const column = {
  options: {
    chart: {
      id: "column-chart",
      type: "bar"
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        horizontal: false
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ],
  height: 350,
  width: 700
};
