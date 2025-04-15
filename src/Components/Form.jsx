import React from 'react'
import { useState } from 'react'
import Table from './Table'




function Form() {
  const [myExpense,setMyExpense] = useState( [])
    const [submittedForm,setSubmittedForm]=useState([{id:1, expense:"",description:"",category:"",amount:"",date:""}])

    function handleChange(event)
{const { name, value } = event.target;
      setSubmittedForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));

     }
      function handleSubmit(event) {
        event.preventDefault();
        const { expense, description, category, amount, date } = submittedForm;

        if (!expense || !description || !category || !amount || !date) {
          alert("Please fill in all fields before submitting.");
          return;
        }
        const newExpense = {
          ...submittedForm,
          id: myExpense.length + 1
        };
        setMyExpense(prevExpenses => [...prevExpenses, newExpense])

            setSubmittedForm([{id:1, expense:"",description:"",category:"",amount:"",date:""}])

        }
const submissions =myExpense.map((item)=>{
  return (

     <tr key={item.id}>
        <td>{item.expense}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
        <td>{item.date}</td>

      </tr>
 )})


  return (
    <div id='form-submit'>
        <form onSubmit={handleSubmit}>
            <h1>Add Expense</h1>
            <p>Enter your details below</p>
            <input name="expense"value={submittedForm.expense }type="text"     onChange={handleChange}placeholder='Enter expense name'className='form-input'/><br />
            <input name="description"value={submittedForm.description }type="text"    onChange={handleChange}placeholder='Enter expense description'className='form-input'/><br />
            <input name="category"value={submittedForm .category}type="text"    onChange={handleChange}placeholder='Enter expense category'className='form-input'/><br />
            <input name="amount"value={submittedForm.amount }type="text"    onChange={handleChange}placeholder='Enter amount'className='form-input'/><br />
            <input name="date"value={submittedForm.date }type="date" onChange={handleChange}placeholder='dd/mm/yr'className='form-input'/><br />
            <button type='submit' id='button'>submit</button>
        </form>

        <Table items={submissions} />


    </div>
  )
}

export default Form