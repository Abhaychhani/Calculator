import React, { useState } from 'react'

function Calculator() {
  const  [input,setInput] = useState("")
  const [result,setResult] = useState("0")
  
  function calc(e){
    if(e.target.value==="="){
      if(input==""){
        setResult('0')
      }else{
        setResult(eval(input).toString())
      }
    }
    else if(e.target.value==="Ac"){
      setResult("0")
      setInput("")
    }
    else if(e.target.value==="De"){
      setInput(input.slice(0,-1))
    }
    else{
      setInput(input.concat(e.target.value))
    }
  }

  return (
    <div className='calculator'>
        <div className="display">
          <div className="calculate">
            {input}
          </div>
          <div className="result">
            {result}
          </div>
        </div>
        <div className="btns-wrapper">
          <div className="row">
            <button onClick={calc} value="Ac" className='all-clear'>Ac</button>
            <button onClick={calc} value="De" className='clear'>DE</button>
            <button onClick={calc} value="%" className='operator'>%</button>
            <button onClick={calc} value="/" className='operator'>/</button>
          </div>
          <div className="row">
            <button onClick={calc} value="7">7</button>
            <button onClick={calc} value="8">8</button>
            <button onClick={calc} value="9">9</button>
            <button onClick={calc} value="*" className='operator'>x</button>
          </div>
          <div className="row">
            <button onClick={calc} value="4" >4</button>
            <button onClick={calc} value="5" >5</button>
            <button onClick={calc} value="6" >6</button>
            <button onClick={calc} value="+" className='operator'>+</button>
          </div>
          <div className="row">
            <button onClick={calc} value="1" >1</button>
            <button onClick={calc} value="2" >2</button>
            <button onClick={calc} value="3" >3</button>
            <button onClick={calc} value="-" className='operator'>-</button>
          </div>
          <div className="row">
            <button onClick={calc} value="." >.</button>
            <button onClick={calc} value="0" >0</button>
            <button onClick={calc} value="=" className='equal'>=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator