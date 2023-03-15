import React from "react";
import './expense.css';

function Transactionhistory({transactions , ondeletetransaction}){

return(

<>
<div className="container">
<h2>Transaction History</h2>

<ul>
    {
        transactions.map((data)=> <li key={data.id}>{data.name} ₹{data.amount} <button onClick={()=>ondeletetransaction(data.id)}>X</button></li>)
    }
</ul>
</div>
</>

);


}

export default Transactionhistory;