import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <>
      <div className="App">
        <p>Hello</p>
        <Datepicker selected={selectedDate} onChange={(date)=>setSelectedDate(date)}/>
      </div>
    </>
  )
}

export default App
