# ReGraph
The versatile website, create your own charts, check game statistics and so on

## 📦 Features

- Upload data
- You can label chart's lines
- Create your own chart

## Technologies

- Vite
- React
- Tailwind
- ApexCharts
- react-icons

## 📁 Format for input data

```json
{
  "options": {
    "chart": {
      "id": "basic-bar"
    },
    "xaxis": {
      "categories": ["Jan", "Feb", "Mar", "Apr"]
    }
  },
  "series": [
    {
      "data": [10, 20, 30, 40]
    },
    {
      "data": [15, 25, 35, 45]
    }
  ],
  "height": 400,
  "width": 600
}
```

The structure will be symplified
