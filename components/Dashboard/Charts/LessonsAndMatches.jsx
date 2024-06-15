import CanvasJSReact from '../../../lib/canvasjs-3.6.6/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LessonsAndMatchesChart = () => (
  <CanvasJSChart
    options={{
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Lecții si meciuri',
      },
      subtitles: [
        {
          text: 'Desfășurate anul acesta',
          fontSize: 16,
        },
      ],
      axisY: {
        suffix: ' °C',
      },
      legend: {
        cursor: 'pointer',
        fontSize: 16,
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          name: 'Lecții',
          type: 'spline',
          yValueFormatString: '#0',
          showInLegend: true,
          dataPoints: [
            { x: new Date(2022, 5, 24), y: 31 },
            { x: new Date(2022, 5, 25), y: 31 },
            { x: new Date(2022, 5, 26), y: 29 },
            { x: new Date(2022, 5, 27), y: 29 },
            { x: new Date(2022, 5, 28), y: 31 },
            { x: new Date(2022, 5, 29), y: 30 },
            { x: new Date(2022, 5, 30), y: 29 },
          ],
        },
        {
          name: 'Meciuri',
          type: 'spline',
          yValueFormatString: '#0',
          showInLegend: true,
          dataPoints: [
            { x: new Date(2022, 5, 24), y: 22 },
            { x: new Date(2022, 5, 25), y: 19 },
            { x: new Date(2022, 5, 26), y: 23 },
            { x: new Date(2022, 5, 27), y: 24 },
            { x: new Date(2022, 5, 28), y: 24 },
            { x: new Date(2022, 5, 29), y: 23 },
            { x: new Date(2022, 5, 30), y: 23 },
          ],
        },
      ],
    }}
  />
);
export default LessonsAndMatchesChart;
