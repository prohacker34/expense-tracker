import React from 'react'
import Table from './Table'
function Form() {
  return (
    <div id='form-submit'>
        <form>
            <h1>Add Expense</h1>
            <p>Enter your details below</p>
            <input type="text"  className='form-input'/><br />
            <input type="text"  className='form-input'/><br />
            <input type="text"  className='form-input'/><br />
            <input type="text"  className='form-input'/><br />
            <input type="text"  className='form-input'/><br />

        </form>
        <Search />
        <Table />
    </div>
  )
}

export default Form