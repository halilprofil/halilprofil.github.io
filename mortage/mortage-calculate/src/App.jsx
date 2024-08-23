import { useState } from 'react'
import './App.css'

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  function submitForm(e){
    e.preventDefault();

    console.log(e.target[0].value);
    let amount = e.target[0].value;
    let term = e.target[1].value;
    let rate = Number(e.target[2].value);
    

    let totalAmount = Number(amount)+Number(((amount*rate/100)*(term)));
    let monthlyPayment = totalAmount/(term*12);

    setTotalAmount(totalAmount.toFixed(2));
    setMonthlyPayment(monthlyPayment.toFixed(2));


   
  }

 

  

  return (
    <>
    <div className="container">
       
    

    <div className="form-container">

    <h3>Mortgage Calculator <button>clear</button></h3>

      <form onSubmit={(e)=>submitForm(e)} >
       
        <p>
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <input id='mortgage-amount' type="number" />
        </p>
        <div>
        <p>
        <label htmlFor="mortgage-term">Mortgage Term</label>
        <input id='mortgage-term' type="number" />
        </p>
        
        <p>
        <label htmlFor="interest-rate">Interest Rate</label>
        <input id='interest-rate' type="text"  />
        </p>
        </div>
        <button type='submit' >Calculate Repayments</button>
        
      </form>

    </div>

    <div className="content">
          <h3>Your results</h3>
          <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>


          <div className="repayment">
            <div>
              <span>Your monthly repayments</span>
              <p>{monthlyPayment}</p>
            </div>

            <div>
              <span>Total you'll repay over the term</span>
              <p className='white'>{totalAmount}</p>
            </div>
          </div>
    </div>


      
      
    </div>
    </>
  )
}

export default App
