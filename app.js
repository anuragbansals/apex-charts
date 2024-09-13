var chart;
var options = {
  series: [
    {
      name: "ExpoSim Virtual Convention and Summit 2023",
      data: [],
    },
  ],
  noData: {
    text: "Loading...",
  },
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
      tools: {
        download: false
      }
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "Peak Users",
    align: "left",
  },
  fill: {
    opacity: 0.16,
    type: "solid",
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
    title: {
      text: "Peak Users",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
  },
};

window.ApexCharts &&
  (chart = new ApexCharts(document.querySelector("#chart"), options)).render();

refreshLiveUserStat();

async function refreshLiveUserStat() {
  let response = await fetch(
    "https://demo.exposim.io/organizer/live-users-stats"
  );
  let data = await response.json();
  chart.updateSeries([
    {
      data: data,
    },
  ]);
}
