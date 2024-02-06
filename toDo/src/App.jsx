import SideBar from './components/SideBar'
import  Main from './components/Main'
import Projects from './components/Projects'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calendar from './components/Calendar'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'
import './App.css'


function App() {

  return (
    <div className="App">
      <SideBar>
        <User/>
        <AddNewTodo/>
        <Calendar/>
        <Projects/>
      </SideBar>
      <Main>
        <Todos/>
        <EditTodo/>
      </Main>
    </div>
  )
}

export default App
