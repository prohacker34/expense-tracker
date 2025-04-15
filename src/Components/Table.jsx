import React from 'react'

function Table({items}) {
  return (
    <div id='container'>
       <input id='input' type='text'placeholder='search' ></input>
 <table>
<tbody>
  <tr>
    <th>Expense</th>
    <th>description</th>
    <th>category</th>
    <th>amount</th>
    <th>date</th>
    </tr>
  { items}
</tbody>
</table>
    </div>
  )
}

export default Table