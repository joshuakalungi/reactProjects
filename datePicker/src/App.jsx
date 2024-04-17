import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaCalendarAlt} from "react-icons/fa";
import "./App.css";

function CustomInput({value, onClick}){
  return(

    <div className="input-group">
      <input type="text" className="form-control" value={value} onClick={onClick} readOnly></input>
      <div className="input-group-append">
        <span className="input-group-text">
          <FaCalendarAlt/>
        </span>
      </div>
    </div>
  )
}

function App() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <>
      <div className="App">
        <h1 className="mt-2 mb-5">React Datepicker with Calendar Icon</h1>
        <label><Datepicker selected={selectedDate} onChange={(date)=>setSelectedDate(date)} customInput={<CustomInput/>}/></label>
      </div>
    </>
  )
}

export default App
