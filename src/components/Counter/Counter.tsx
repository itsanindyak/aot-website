// import React from "react";
// import { brand } from "../../Theme";

import React ,{ useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


interface IStyle {
  textAlign?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  width?:string;
}
function Counter() {
  const [counterState, SetCounterState] = useState(false);
  const h2Style: IStyle = {
    textAlign: "center",
    fontSize: "60px",
    margin: "2px",
    padding: "2px",
    width:'200px'
  };
  const h3Style: IStyle = {
    textAlign: 'center',
    fontSize: '18px',
    margin: '0px',
    padding: '2px',
    width:'200px'
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "50px 0px 50px",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-around",
        backgroundColor: "red",
      }}
    >
      <ScrollTrigger
        onEnter={() => SetCounterState(true)}
        onExit={() => SetCounterState(false)}
      >
        <div>
          <h2 style={h2Style}>
            {counterState && (
              <CountUp start={0} end={7} duration={2.75}></CountUp>
            )}
          </h2>
          <h3 style={h3Style}>PROFESSIONAL COURSES</h3>
        </div>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={() => SetCounterState(true)}
        onExit={() => SetCounterState(false)}
      >
        <div>
          <h2 style={h2Style}>
            {counterState && (
              <CountUp start={0} end={89} duration={2.75}></CountUp>
            )}
          </h2>
          <h3 style={h3Style}>PROFESSIONAL TEACHERS</h3>
        </div>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={() => SetCounterState(true)}
        onExit={() => SetCounterState(false)}
      >
        <div>
          <h2 style={h2Style}>
            {counterState && (
              <CountUp start={0} end={2300} duration={2.75}></CountUp>
            )}
          </h2>
          <h3 style={h3Style}>REGISTERED STUDENTS</h3>
        </div>
      </ScrollTrigger>
      <ScrollTrigger
        onEnter={() => SetCounterState(true)}
        onExit={() => SetCounterState(false)}
      >
        <div>
          <h2 style={h2Style}>
            {counterState && (
              <CountUp start={0} end={15619} duration={2.75}></CountUp>
            )}
          </h2>
          <h3 style={h3Style}>ESTABLISHED ALUMNI</h3>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Counter;
