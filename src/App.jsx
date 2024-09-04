import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dropdown } from './components/Dropdown'

function App() {
  const [filtered, setFiltered] = useState('')
  const Details = [
    { id:"1",name:"Date of Registration",Children: [
      {id: "11",name: "dummy data 1"},
      {id: "12",name: "dummy data 2"},
      

    ]},
    { id:"2",name:"Location",Children: [
      {id: "21",name: "dummy data 1"},
      {id: "22",name: "dummy data 2"},
   

    ]},
    { id:"3",name:"Vendor Score",Children: [
      {id: "31",name: "dummy data 1"},
      {id: "32",name: "dummy data 2"},
   

    ]},
    { id:"4",name:"Rating",Children: [
      {id: "41",name: "dummy data 1"},
      {id: "42",name: "dummy data 2"},
     

    ]},
    { id:"5" ,name:"Type of Business",Children: [
      {id: "51",name: "dummy data 1"},
      {id: "52",name: "dummy data 2"},
 

    ]},
  ]
  const Handledropdown = (e)=>{
    setFiltered(e.target.value);
  }
  return (
    <>
    <div className='container'>
      <h1>Dynamic Dropdown</h1>
      <Dropdown Details={Details} onChange={Handledropdown}></Dropdown>
      <p>Selected detail is <b>{filtered}</b></p>
    </div>
    </>
  )
}

export default App
