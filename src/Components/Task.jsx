import React,{useState} from 'react'
import data from "./db"
import "../Components/Task.css"
let Task = () => {
    let[state, setState] = useState(data)
  return (
    <div>
       <div className="container">
        <h3 style={{color:"white", fontSize:"30px", padding:"20px 0px 0px 0px"}}>{state.length} Birthdays today</h3>
        {state.map((x)=>{
            return(
                <div className="person">
            <img src={x.image} alt="" />
            <h3>{x.name}</h3>
            <h3>{x.date}</h3>
         </div>
            )
        })}
        <button onClick={()=>{
            setState([]);
        }}>RESET</button>
       </div>
    </div>
  )
}

export default Task
