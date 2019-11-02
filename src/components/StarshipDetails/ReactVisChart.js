import React from "react";
import { format } from "d3-format";
import { RadarChart } from "react-vis";

const basicFormat = format(".1r");
const wideFormat = format(".3r");

export default function BasicRadarChart(props) {
  // console.log(props.range);
  const { cost, Crew, MaxAtmSpeed, HyperDRat, MaxMLh } = props.range;
  let DATA=null;
  if (props.range && props.data) {
     DATA = [
      {
        name: "Pider",
        cost,
        crew:Crew,
        maxAtmSpeed:MaxAtmSpeed,
        HyperDRat,
        MaxMLh,
        fillOpacity: 0.1,
        strokeOpacity: 0.1,
        strokeWidth: 2,
        fill: "#eee",
        stroke: 2
      },
      {
        name: "Pider2",
        cost: (cost / 3) * 2,
        crew: (Crew / 3) * 2,
        maxAtmSpeed: (MaxAtmSpeed / 3) * 2,
        HyperDRat: (HyperDRat / 3) * 2,
        MaxMLh: (MaxMLh / 3) * 2,
        fillOpacity: 0.1,
        strokeOpacity: 0.1,
        strokeWidth: 2,
        fill: "#eee",
        stroke: 2
      },
      {
        name: "Pider3",
        cost: cost / 3.0,
        crew: Crew / 3.0,
        maxAtmSpeed: MaxAtmSpeed / 3,
        HyperDRat: HyperDRat / 3,
        MaxMLh: MaxMLh / 3,
        fillOpacity: 0.1,
        strokeOpacity: 0.1,
        strokeWidth: 2,
        fill: "#eeeeee",
        stroke: 2
      },
      {
        name: props.data[0].name,
        cost: props.data[0].cost,
        crew: props.data[0].crew,
        maxAtmSpeed: props.data[0].maxAtmSpeed,
        HyperDRat: props.data[0].HyperDRat,
        MaxMLh: props.data[0].MaxMLh,
        fillOpacity: 0.1,
        strokeOpacity: 0.5,
        strokeWidth: 2,
        fill: "#aaaaaa",
        stroke: 2
      }
    ];
  }
  console.log(DATA);

  return (
    <RadarChart
      margin={{ left: 60, right: 60, top: 60, bottom: 60 }}
      data={DATA}
      tickFormat={t => wideFormat(t)}
      startingAngle={0}
      hideInnerMostValues={true}
      renderAxesOverPolygons={true}
      style={{
        labels: {
          fontSize: 12,
          textAnchor: "middle",
          stroke: "blue",
        },
        polygons: {
          stroke: "blue"
        },
        axes: {
          line: {
            // fill: "black",
            strokeWidth: 2,
            stroke: "blue"
          },
          ticks: {
            // fill: "black",
            strokeWidth: 1,
            stroke: "blue"
          },
          text: {
            fontSize: 10,
            stroke: "blue",
            fill: "#0000ff"
          }
        }
      }}
      domains={[
        {
          name: "Cost Mil.",
          domain: [0, props.range.cost || 0],
          tickFormat: t => `${basicFormat(t / 1000000)}`,
          getValue: d => d.cost || 0
        },
        {
          name: "Crew",
          domain: [0, props.range.Crew],
          getValue: d => d.crew || 0
        },
        {
          name: "Max Atm. Speed",
          domain: [0, props.range.MaxAtmSpeed || 0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.maxAtmSpeed || 0
        },
        {
          name: "HyperD Rat",
          domain: [0, props.range.HyperDRat || 0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.HyperDRat || 0
        },
        {
          name: "Max ML/h",
          domain: [0, props.range.MaxMLh || 0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.MaxMLh || 0
        }
      ]}
      width={500}
      height={400}
    />
  );
}
