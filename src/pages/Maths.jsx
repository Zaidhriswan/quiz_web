import React from 'react'
import maths from "../questions/maths.json"
import { useState } from "react"
export default function Maths() {
  const [score,setScore]=useState(0);
  function check(event,option,answer){
    if(option===answer){
      setScore(score+1);
      event.target.classList.remove("btn-secondary");
      event.target.classList.add("bg-success");
    }
    else{
      event.target.classList.remove("btn-secondary")
      event.target.classList.add("bg-danger")
    }
    let footer = event.target.parentElement;
    footer.querySelectorAll('button').forEach(b=>b.disabled=true);
  }
  return (
    <div>
      <div className="container border-bottom mb-3 py-3 d-flex justify-content-between">
        <h1 className="text-light display-3 fw-bolder flex-1">Mathamatics</h1>
        <h3 className="flex-1 text-light">Score: {score}</h3>
      </div>
      <div className="container">
        {
          maths.map(q=>(
            <div className="p-3">
              <div className="card">
                <div className="card-body">{q.question}</div>
                <div className="card-footer">
                  {
                    q.options.map(o=>(<button className="btn btn-secondary mx-2" onClick={(event)=>{check(event,o,q.answer)}}>{o}</button>))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
