import React from 'react'


function Table({items}) {
  return (
    <div id='container'>
       <input id='input' type='text'placeholder='search' ></input>
 <table>

  <tr>
    <th>Expense</th>
    <th>description</th>
    <th>category</th>
    <th>amount</th>
    <th>date</th>
    </tr>


  <tr>
    <td>lunch</td>
    <td>ugali</td>
    <td>delicious</td>
    <td>200</td>
    <td>13/04/2025</td>
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

</table>
    </div>
  )
}

export default Table