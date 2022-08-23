import logo from "./logo.svg"
import "./App.css"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
