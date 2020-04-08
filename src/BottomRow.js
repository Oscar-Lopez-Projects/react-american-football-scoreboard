import React,{useState} from "react";
import "./App.css";

const BottomRow = () => {
  const [quarter,setQuarter]= useState(1);
  const [down,setDown]= useState(1);
  
  const downCount=()=>{
    if(down<4){
      return setDown(down +1)
    }else{
      return setDown(1);
    }
  }
  



  const quarterLevel= ()=> {
       if(quarter<4){
        return setQuarter(quarter+1)
       }else{
         return setQuarter(1);
       }
    }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick={downCount}>Down++</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={quarterLevel}>Add Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
