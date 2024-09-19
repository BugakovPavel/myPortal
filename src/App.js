import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import './App.css'
import Cars from './Pages/Cars'
import Header from './components/Header'
import Company from './Pages/Company'
import Charge from './Pages/Charge'
import MyMap from './Pages/MyMap'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/car" element={<Cars />} />
            <Route path="/map" element={<MyMap />} />
            <Route path="/charge" element={<Charge />} />
            <Route path="/company" element={<Company />} />
            <Route path="/" element={<Navigate to="/car" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
