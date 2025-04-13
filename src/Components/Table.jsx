import React from 'react'


function Table({items}) {
  return (
    <div id='container'>
       <input id='input' type='text'placeholder='search' ></input>
 <table>
  <thead>
  <tr>
    <th>Expense</th>
    <th>description</th>
    <th>category</th>
    <th>amount</th>
    <th>date</th>
    </tr>
    {
    items.map((item)=>
        <tr key={item.id}>
        <td>{item.expense}</td>
        <td>{item.description}</td>
        <td>{item.category}</td>
        <td>{item.amount}</td>
        <td>{item.date}</td>
      </tr>
    )}

  <tr>
    <td>lunch</td>
    <td>ugali</td>
    <td>delicious</td>
    <td>200</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  </thead>

</table>
    </div>
  )
}

export default Table