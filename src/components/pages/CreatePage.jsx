import Chart from "react-apexcharts";

export default function CreatePage() {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return (
    <div className="flex flex-1 justify-between p-10 ">
      <form className="rounded border-black shadow-lg p-8">
        <label htmlFor="chart-type">Select a type of a chart: </label>
        <select name="chart-type" id="chart-type">
          <option value={"line"}>Line</option>
          <option value={"area"}>Area</option>
          <option value={"column"}>Column</option>
          <option value={"boxPlot"}>BoxPlot</option>
        </select>
      </form>

      <div>
        <Chart options={options} series={series} type="bar" width="500" />
      </div>
    </div>
  );
}
