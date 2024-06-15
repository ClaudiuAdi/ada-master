import CanvasJSReact from '../../../lib/canvasjs-3.6.6/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SalesByAbonament = () => (
  <CanvasJSChart
    options={{
      theme: 'light2',
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Încasări',
      },
      subtitles: [
        {
          text: 'Prin comercializarea abonamentelor',
          fontSize: 16,
        },
      ],
      axisX: {
        title: 'Încasări',
      },
      axisY: {
        includeZero: true,
      },
      axisY2: {
        lineColor: '#C0504E',
        labelFontColor: '#C0504E',
        includeZero: true,
      },
      axisY3: {
        lineColor: '#C0504E',
        labelFontColor: '#C0504E',
        includeZero: true,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
      },
      data: [
        {
          type: 'column',
          name: 'Basic',
          showInLegend: true,
          yValueFormatString: '#,##0 Lei',
          dataPoints: [
            { label: 'Aprilie', y: 19034.5 },
            { label: 'Mai', y: 10015 },
            { label: 'Iunie', y: 16342 },
            { label: 'Iulie', y: 20088 },
          ],
        },
        {
          type: 'column',
          name: 'Medium',
          axisYType: 'secondary',
          showInLegend: true,
          yValueFormatString: '#,##0 Lei',
          dataPoints: [
            { label: 'Aprilie', y: 29034.5 },
            { label: 'Mai', y: 20015 },
            { label: 'Iunie', y: 21342 },
            { label: 'Iulie', y: 13088 },
          ],
        },
        {
          type: 'column',
          name: 'Premium',
          axisYType: 'secondary',
          showInLegend: true,
          yValueFormatString: '#,##0 Lei',
          dataPoints: [
            { label: 'Aprilie', y: 17015.3 },
            { label: 'Mai', y: 12015 },
            { label: 'Iunie', y: 14342 },
            { label: 'Iulie', y: 11088 },
          ],
        },
      ],
    }}
  />
);

export default SalesByAbonament;
