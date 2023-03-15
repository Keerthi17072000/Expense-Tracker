
import React from "react";
import './expense.css';
function Expense({income , expense}){

return(

<>
<div className="container">
<div>
     <h2>Balance</h2>
     <div>₹{income - expense}</div>
</div>
<div>
    <div>
      <h2>Income</h2>
    <div>₹{income}</div>
    </div>

    <div>
      <h2>Expense</h2>
      <div>₹{expense}</div>
    </div>

</div>
</div>
</>


);


}

export default Expense;