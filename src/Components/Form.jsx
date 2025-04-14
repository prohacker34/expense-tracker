import React from 'react'
import { useState } from 'react'
import Table from './Table'




function handleClick() {

}
function handleChange(event) {
 setSubmittedForm({...submittedForm,[event.target.value]:event.target.value})

}
function Form() {
  const [myExpense,setMyExpense] = useState( [
    {id:1, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"}

   ])

const [submittedForm,setSubmittedForm]=useState(myExpense)

function handleSubmit(event) {
event.preventDefault()
  const formData = [{myExpense}]
  const dataArray = [...submittedForm,formData]
  setSubmittedForm(dataArray)
   setMyExpense({expense:"",description:"",category:"",amount:"",data:""})
  }
  const submissions =submittedForm.map((newItem)=>{
  return (

     <tr key={newItem.id}>
        <td>{newItem.expense}</td>
        <td>{newItem.description}</td>
        <td>{newItem.category}</td>
        <td>{newItem.amount}</td>
        <td>{newItem.date}</td>

      </tr>

  )
  })
  return (
    <div id='form-submit'>
        <form onSubmit={handleSubmit}>
            <h1>Add Expense</h1>
            <p>Enter your details below</p>
            <input value={submittedForm.expense}type="text"     onChange={handleChange}placeholder='Enter expense name'className='form-input'/><br />
            <input value={submittedForm.description}type="text"    onChange={handleChange}placeholder='Enter expense description'className='form-input'/><br />
            <input value={submittedForm.category}type="text"    onChange={handleChange}placeholder='Enter expense category'className='form-input'/><br />
            <input value={submittedForm.amount}type="text"    onChange={handleChange}placeholder='Enter amount'className='form-input'/><br />
            <input value={submittedForm.date}type="date" onChange={handleChange}placeholder='dd/mm/yr'className='form-input'/><br />
            <button type='submit' id='button'onClick={handleClick}>submit</button>
        </form>

        <Table items={submissions} />


    </div>
  )


}

export default Form