import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import PokemonItem from './PokemonItem';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {

    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    const [Pokemon, setPokemon] = useState([])
    const [Serch, setSerch] = useState("")
    const [Types, setTypes] = useState([])

    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res => setPokemon(res.data.results)  )
     
        axios.get("https://pokeapi.co/api/v2/type/")
        .then(res=> setTypes(res.data.results))
    }, [])
    



  const serch = (e)=> {
    e.preventDefault();{

        navigate(`/pokemon/${Serch.toLowerCase()}`)
   
  
    }
  }

  const filterTypes =(e)=> {
    alert ("se seleciono " + e.target.value)
    axios.get(e.target.value)
    .then(res => setPokemon(res.data.pokemon))
  }    
    return (
        <div className='container'>

                    <h1 className='title_pokedex'>Bienvenido <b>{user}</b> este el Pokedex api</h1>

<form onSubmit={serch} >
<div className="mb-3">
    <input type="text"
    className="form-control"
     value={Serch} 
     placeholder="Escribe El Pokemon"
     onChange={ e => (setSerch(e.target.value)) } />
</div>
  
    <button className="btn btn-success" >SERCH</button>
</form>
<select className='card_option' onChange={filterTypes} >
    <option  value=""> SELECCIONA UN TIPO DE POKEMON</option>
    {
        Types.map(
            type=>(
                <option key={type.url} value={type.url} > {type.name} </option>
            )
        )
    }
</select>
<div className='container'>

                    <div className='card_pokemon' >
                                                
                                                       {
                            Pokemon.map(poke=>(
                                <PokemonItem  key={poke.name} PokemonUrl={poke.url ? poke.url : poke.pokemon.url}/>
                                
                            ))
                        }
                     
                                
                    </div >

        </div>
</div>
    );
};

export default Pokemon;