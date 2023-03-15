import React, {useState , useEffect} from "react";
import Expense from './expense';
import Transactionhistory from "./transactionhistory";
import Transactionform from "./transactionform";
import { uniqueId } from "./util";
import './expense.css';

const transactiondata = [

];



function Expensetracker(){

    const [income , setincome] = useState(0);
    const [expense , setexpense] = useState(0);
    const[transactions , settransactions]= useState(transactiondata);

   const savestate = ()=> {
localStorage.setItem("expensetrackerstate", JSON.stringify(transactions));

   }

    const calculateexpenses =() => {

let income = 0 , expense = 0;

transactions.forEach((data)=>{

if(data.type === 'income'){

    income += data.amount;

}else if (data.type === 'expense'){

    expense += data.amount;
}

});

savestate();
setincome(income);
setexpense(expense);

    }

    const handleaddnewtransaction = item => {

        let newtransactions = [...transactions ,item];
        settransactions(newtransactions);

    }

    const handledeletenewtransaction = id => {

        const newtransactions =transactions.filter((item)=>item.id != id);

        settransactions(newtransactions);
    }

    useEffect (()=> {

        let localstate = JSON.parse(localStorage.getItem("expensetrackerstate"));
        if(localstate){

            settransactions(localstate);
        }else{
            calculateexpenses();
        }

      calculateexpenses();

     },[]);


    useEffect (()=> {

        calculateexpenses();
   
       },[transactions]);

return(

    <>
    <div className="container">
   <h1>Expense Tracker</h1> 
   <Expense income={income} expense={expense}/>
   <Transactionhistory transactions={transactions} ondeletetransaction={handledeletenewtransaction}/>
   <Transactionform onnewtransaction = {handleaddnewtransaction}/>
   </div>
    </>


);

}

export default Expensetracker;