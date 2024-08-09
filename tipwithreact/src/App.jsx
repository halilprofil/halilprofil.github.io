import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Splitter></Splitter>
    </>
  )
}

function Splitter() {
const [evalValues,setEvalValues] = useState({bill:0,tip:0,nOfPeople:0})
const [amounts,setAmounts] = useState({tip:0,total:0})

function  handleTipClick(tipValue){
  setEvalValues((prev)=>({...prev,tip:tipValue}))
  evaluateTipAmount()
  evaluateTotalAmount()
}
function handleChangeBill(e){
  setEvalValues((prev)=> ({...prev,bill:Number(e.target.value)}))
  evaluateTipAmount()
  evaluateTotalAmount()
}
function handleChangePeople(e){
  setEvalValues((prev)=>({...prev,nOfPeople:e.target.value}))
  evaluateTipAmount()
  evaluateTotalAmount()
}
function evaluateTipAmount(){
const value = (Number(evalValues.bill) * Number(evalValues.tip) /100) / Number(evalValues.nOfPeople)
setAmounts((prev)=>({...prev,tip:value}))
}
function evaluateTotalAmount(){
const value = (evalValues.bill + (Number(evalValues.bill) * Number(evalValues.tip) /100)) / Number(evalValues.nOfPeople)
setAmounts((prev)=>({...prev,total:value}))
}

function clickResetBtn(){
  setEvalValues((prev)=>({...prev,tip:0 ,bill:0,nOfPeople:0}))
  setAmounts((prev)=>({...prev,tip:0,total:0}))
  // evaluateTipAmount()
  // evaluateTotalAmount()
}
console.log(evalValues)
  return (
    <div className="container">
      <img className="logo" src={('../src/img/SPLITTER.svg')} />
      <div className="splitter">
        <form id="splitterForm">
          <div className="splitter-left">
            <p>Bill</p>
            <div>
              <input onChange={(e)=> handleChangeBill(e)} className="bill" type="number" name="total-bill" required />
            </div>
            <p>Select Tip %</p>
            <div className="tip">
              <button className="btn1" type="button" onClick={() => handleTipClick(5)}> %5</button>
              <button className="btn2" type="button" onClick={() => handleTipClick(10)} >%10</button>
              <button className="btn3" type="button" onClick={() => handleTipClick(15)} >%15</button>
              <button className="btn4" type="button" onClick={() => handleTipClick(25)} >%25</button>
              <button className="btn5" type="button" onClick={() => handleTipClick(50)} >%50</button>
              <input className="custom" type="number" onChange={(e)=>handleTipClick(e.target.value)}  placeholder="CUSTOM" name="custom-tip" />
            </div>
            <div className="notzero">
              <p>Number of People</p>
              <p className="no-zero"></p>
            </div>
            <div>
              <input onChange={(e)=> handleChangePeople(e)} className="people" type="number" name="total-person" required />
            </div>
          </div>

          <div className="splitter-right">
            <div className="line">
              <div>
                <p>Tip Amount</p>
                <span>/ person</span>
              </div>
              <h2 id="tip-amount">${amounts.tip===0 ? 0 : amounts.tip.toFixed(2)}</h2>
            </div>
            <div className="line">
              <div>
                <p>Total Amount</p>
                <span>/ person</span>
              </div>
              <h2 id="total-amount">${amounts.total===0 ? 0 : amounts.total.toFixed(2)}</h2>
            </div>
            <button type="button" onClick={clickResetBtn} className="reset">RESET</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
