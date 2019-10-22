import React from "react";
import { format } from "d3-format";
import { RadarChart,FlexibleXYPlot  } from "react-vis";



const basicFormat = format(".1r");
const wideFormat = format(".3r");

export default function BasicRadarChart(props) {
    // console.log(props)
  return (
      
    <RadarChart
      data={props.data}
      tickFormat={t => wideFormat(t)}
      startingAngle={0}
      domains={[
        {
          name: "Cost Mil.",
          domain: [0, props.range.cost||0],
          tickFormat: t => `${basicFormat(t / 1000000)}`,
          getValue: d => d.cost||0
        },
        { name: "Crew", domain: [0, props.range.Crew], getValue: d => d.crew||0 },
        {
          name: "Max Atm. Speed",
          domain: [0, props.range.MaxAtmSpeed||0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.maxAtmSpeed||0
        },
        {
          name: "HyperD Rat",
          domain: [0, props.range.HyperDRat||0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.HyperDRat||0
        },
        {
          name: "Max ML/h",
          domain: [0, props.range.MaxMLh||0],
          tickFormat: t => `${basicFormat(t)}`,
          getValue: d => d.MaxMLh||0
        }
      ]}
      width={500}
      height={400}
    />
  );
}