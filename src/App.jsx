import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/InputName';
import Pokedex from './components/Pokedex';
import PokedexDetails from './components/PokedexDetails';
import ProtectedRoutes from './components/ProtectRoutes';


function App() {
  
  const name = useSelector(state => state.name)

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route element={<ProtectedRoutes />}>
            <Route path='/Pokedex' element={<Pokedex />}/>
            <Route path='/Pokedex/:id' element={<PokedexDetails />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
