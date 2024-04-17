import { useState } from 'react';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TimePickerComponent placeholder='Select a time'></TimePickerComponent>
    </>
  )
}

export default App
