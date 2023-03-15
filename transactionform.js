import { useState } from "react";
import React from "react";
import { uniqueId } from "./util";
import './expense.css';

function Transactionform({onnewtransaction}){

    const[namevalue , setnamevalue] = useState('');
    const[amountvalue , setamountvalue] = useState('');

    const addtransaction = (type ,event) =>{
    event.preventDefault();
      const data =  {id:uniqueId() , name: namevalue, amount:parseInt(amountvalue), type:type};

      onnewtransaction(data);
      setnamevalue('');
      setamountvalue('');
    }

return(

    <>
    <div className="container">
    <h2>Add New Transaction</h2>

    <form>
    <label>
    Name
     <div>
        <input type="text" value={namevalue} onChange = {(e)=> setnamevalue(e.target.value)}/>
        </div>
        </label>

        <label>
             Amount
        <div>
        <input type="number" value={amountvalue} onChange = {(e)=> setamountvalue(e.target.value)}/>
        </div>
        </label>
<div>

    <button onClick={(e)=> addtransaction('income', e)}>Add Income</button>
    <button onClick={(e)=> addtransaction('expense', e)}>Add Expense</button>
</div>

    </form>
    </div>
    </>


);



}

export default Transactionform;