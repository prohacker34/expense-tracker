import React from 'react'
import Table from './Table'
import { useState } from 'react'




function handleSubmit(event) {

  event.preventDefault()

alert('submited')

}
function handleClick() {

}
function handleChange(event) {


}
function Form() {
     const [expense,setExpense]= useState([
      {id:1, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
      {id:2, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
      {id:3, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
      {id:4, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"}
     ])

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

        <Table items ={expense} />
    </div>
  )
}

export default Form