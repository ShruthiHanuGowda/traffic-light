import './TrafficLight.css';
import { useState } from 'react';
import { useEffect } from 'react';

const lightConfig = {
  red:{
    next: "yellow",
    duration: 4000
  },
  yellow:{
    next: "green",
    duration: 5000
  },
  green: {
    next: "red",
    duration: 3000
  }
}

function TrafficLight() {
  //default state color
  const [color, setColor] = useState("red");

  //to change the color
  useEffect(() => {
   const {next, duration} = lightConfig[color];
   setTimeout(()=>{
    setColor(next)
   }, duration)
  }, [color]);
  return (
    <div className="traffic-light">
    <div className={`light red ${color === "red"? "active" : ""}`}></div>
    <div className={`light yellow ${color === "yellow"? "active" : ""}`}></div>
    <div className={`light green ${color === "green"? "active" : ""}`}></div>
    </div>
  );
}

export default TrafficLight;
