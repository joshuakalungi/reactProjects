import Header from './components/Header'
import  Main from './components/Main'

function App() {

  return (
    <div className="App">
      <h1>App</h1>
      <Header>
         <h1>Hallo, World</h1>
      </Header>
      <Main>
         <p>Some content</p>
      </Main>
    </div>
  )
}

export default App
