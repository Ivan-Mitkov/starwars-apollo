import React,{useEffect,useState} from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Cost', A: 149999, fullMark:  320000,
  },
  {
    subject: 'Crew', A: 1,  fullMark: 3,
  },
  {
    subject: 'Max Atm. Speed', A: 1050,  fullMark: 1500,
  },
  {
    subject: 'HyperD Rat', A:1,  fullMark:6,
  },
  {
    subject: 'Max ML/h', A: 100,  fullMark: 120,
  },
  
];

const  Example =(props)=> {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';
    // const[data,setData]=useState(null)
    useEffect(()=>{
      console.log(props.data)
      // setData(props.data)
    },[props.data])
    return (
      <ResponsiveContainer >
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject"  />
       
        <PolarRadiusAxis domain={[0,'auto']} />
        <Radar name="Mike" dataKey="A"  stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer >

    );
  
}
export default  Example