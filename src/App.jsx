import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard.jsx';
import Exercises from './Pages/Exercises.jsx';
import Workouts from './Pages/Workouts.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer';


function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
