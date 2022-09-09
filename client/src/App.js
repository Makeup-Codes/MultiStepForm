import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Store} from './context/Store'
import './App.css';
import DepressionForm from './components/DepressionForm'
import PersonalInfo from './components/PersonalInfo'
import Final from './components/Final'

function App() {
  const [calculation, setCalculation] = useState('');
  return (
    <>
          <Store.Provider value={{
            calculation,
            setCalculation
          }}>
      <Router>
        <Routes>
          <Route path="/" element={<DepressionForm/>}/>
          <Route path="/personaldata" element={<PersonalInfo/>}/>
          <Route path="/final" element={<Final/>}/>
        </Routes>
      </Router>
          </Store.Provider>
    </>
  );
}

export default App;
