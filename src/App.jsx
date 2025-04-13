import Navbar from "./Components/Navbar"

import Form from "./Components/Form"
import { useState } from "react"


function App() {
  const [expense,setExpense]= useState([
    {id:1, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
    {id:2, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
    {id:3, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
    {id:4, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"}

   ])



  return (
<div>
  <Navbar />
  <Form   />


</div>
  )
}
export const expense = [
  {id:1, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
  {id:2, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
  {id:3, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"},
  {id:4, expense:"food",description:"ugali",category:"food",amount:"200",date:"12/20/2024"}

 ]
export default App
