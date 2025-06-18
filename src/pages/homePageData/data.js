const options = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    zoom: { enabled: false },
    sparkline: { enabled: true },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1200,
      animateGradually: {
        enabled: true,
        delay: 200,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.7,
      opacityFrom: 0.6,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  colors: ['#4F46E5'],
  tooltip: {
    enabled: false
  },
};

const series = [
  {
    name: 'Значення',
    data: [24, 38, 31, 40, 55, 48, 60, 70, 65],
  },
];


export {options, series}