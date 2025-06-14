export const line = {
  options: {
    chart: {
      id: "line-bar",
      type: "line",
      zoom: {
        enabled: false
      }
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    },
    stroke: {
      curve: 'smooth', // або 'straight', 'stepline'
      width: 2,
      dashArray: 0
    }
  },
  series: [
    {
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ],

  height: 350,
  width: 700 
}
