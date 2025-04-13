import React from 'react'
import { useState } from 'react'
import { expense } from '../App'
import Table from './Table'
import Submissions from './Submissions'



function handleClick() {

}
function handleChange(event) {
console.log(event.target.value)

}
function Form() {

const [submittedForm,setSubmittedForm]=useState(expense)

function handleSubmit() {
  const formData = expense
  const dataArray = [...submittedForm,formData]
  setSubmittedForm(dataArray)

  }
  const submissions =submittedForm.map((item)=>{
  return (

     <tr key={item.id}>
        <td>{item.expense}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
        <td>{item.date}</td>

      </tr>


  )
  })
  return (
    <div id='form-submit'>
        <form onSubmit={handleSubmit}>
            <h1>Add Expense</h1>
            <p>Enter your details below</p>
            <input type="text"     onChange={handleChange}placeholder='Enter expense name'className='form-input'/><br />
            <input type="text"    onChange={handleChange}placeholder='Enter expense description'className='form-input'/><br />
            <input type="text"    onChange={handleChange}placeholder='Enter expense category'className='form-input'/><br />
            <input type="text"    onChange={handleChange}placeholder='Enter amount'className='form-input'/><br />
            <input type="date" onChange={handleChange}placeholder='dd/mm/yr'className='form-input'/><br />
            <button type='submit' id='button'onClick={handleClick}>submit</button>
        </form>

        <Table items={expense}/>


    </div>
  )
  const newSubmissions={submissions}
  console.log(newSubmissions);
  
}

export default Form