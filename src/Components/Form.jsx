import React from 'react'
import Table from './Table'




function handleSubmit(event) {

  event.preventDefault()



}
function Form() {

  function handleClick() {

  }
  return (
    <div id='form-submit'>
        <form onSubmit={handleSubmit}Submit>
            <h1>Add Expense</h1>
            <p>Enter your details below</p>
            <input type="text"     placeholder='Enter expense name'className='form-input'/><br />
            <input type="text"    placeholder='Enter expense description'className='form-input'/><br />
            <input type="text"    placeholder='Enter expense category'className='form-input'/><br />
            <input type="text"    placeholder='Enter amount'className='form-input'/><br />
            <input type="date" value="dd/mm/yr"placeholder='dd/mm/yr'className='form-input'/><br />
            <button type='submit' id='button'onClick={handleClick}>submit</button>
        </form>

        <Table />
    </div>
  )
}

export default Form