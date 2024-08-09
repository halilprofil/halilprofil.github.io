import { useState } from 'react'
import './App.css'




function App() {
  const [input,setInput] = useState('')

 function handleClick(number){
  setInput(input + number)
  
 }
 function handleReset(){
setInput('')
 }
 function handleEqual(){
 setInput(eval(input))

 }
 function handleDelete(){
  setInput(input.slice(0, -1));
 
 }

  return (
    <>
    <div className="container">
  <div className="calc">
    <div className="header">
      <img src="../src/img/calc.svg" alt="Calculator" />

      <div>
        <span>THEME</span>
        <img src="../src/img/Group 5.svg" alt="Theme" />
      </div>
    </div>

    <div className="header-bottom">
      <p>{input}</p>
    </div>

    <div className="number">
      <div className="number-line">
        <a className="btn" onClick={()=>handleClick('7')} href="#">7</a>
        <a className="btn" onClick={()=>handleClick('8')} href="#">8</a>
        <a className="btn" onClick={()=>handleClick('9')} href="#">9</a>
        <a className="btn light-blue" onClick={()=>handleDelete()} href="#">DEL</a>
      </div>

      <div className="number-line">
        <a className="btn" onClick={()=>handleClick('4')} href="#">4</a>
        <a className="btn" onClick={()=>handleClick('5')} href="#">5</a>
        <a className="btn" onClick={()=>handleClick('6')} href="#">6</a>
        <a className="btn" onClick={()=>handleClick('+')} href="#">+</a>
      </div>

      <div className="number-line">
        <a className="btn" onClick={()=>handleClick('1')} href="#">1</a>
        <a className="btn" onClick={()=>handleClick('2')} href="#">2</a>
        <a className="btn" onClick={()=>handleClick('3')} href="#">3</a>
        <a className="btn" onClick={()=>handleClick('-')} href="#">-</a>
      </div>

      <div className="number-line">
        <a className="btn" onClick={()=>handleClick('.')} href="#">.</a>
        <a className="btn" onClick={()=>handleClick('0')} href="#">0</a>
        <a className="btn" onClick={()=>handleClick('/')} href="#">/</a>
        <a className="btn" onClick={()=>handleClick('*')} href="#">×</a>
      </div>

      <div className="number-line">
        <a className="btn double light-blue" onClick={()=>handleReset()} href="#">RESET</a>
        <a className="btn double red" onClick={()=>handleEqual()} href="#">=</a>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default App
