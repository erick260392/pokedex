import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Pokemon from './componets/Pokemon'
import PokemonDetail from './componets/PokemonDetail'
import UserInput from './componets/UserInput'
import ProtectedRoutes from './componets/ProtectedRoutes'

function App() {


  return (
    <div className="App">
      <HashRouter>
      <h1 className="card-title">POKEDEX</h1>
          <Routes>
        <Route path='/' element={<UserInput />} />
          <Route element = {<ProtectedRoutes/>}>
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/pokemon/:id' element={<PokemonDetail />} />
       
          </Route>
        </Routes>

      </HashRouter>


    </div>
  )
}

export default App
