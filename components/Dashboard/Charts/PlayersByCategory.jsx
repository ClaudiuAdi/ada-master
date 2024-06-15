import CanvasJSReact from '../../../lib/canvasjs-3.6.6/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PlayersByCategory = ({ data }) => (
  <CanvasJSChart
    options={{
      // backgroundColor: 'rgb(243, 244, 246)',
      theme: 'light2',
      animationEnabled: true,
      title: {
        text: 'Jucători CSU ASE',
      },
      subtitles: [
        {
          text: 'După categorie',
          fontSize: 16,
        },
      ],
      data: [
        {
          type: 'pie',
          indexLabelFontSize: 12,
          radius: 120,
          indexLabel: '{label} - {y}',
          yValueFormatString: '###0"%"',
          dataPoints: data || [],
          // dataPoints: [
          //   { y: 12, label: 'Categoria II' },
          //   { y: 42, label: 'Categoria I' },
          //   { y: 20, label: 'Candidat de Maestru' },
          //   { y: 15, label: 'Maestru FIDE' },
          //   { y: 6, label: 'Mare Maestru' },
          // ],
        },
      ],
    }}
  />
);

export default PlayersByCategory;
