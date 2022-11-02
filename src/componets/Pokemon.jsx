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
    const [loading, setloading] = useState(false)
    const [currentPage, setcurrentPage] = useState(1)
    const [pokemonPerPage, setpokemonPerPage] = useState(5)

    useEffect(() => {
        setloading(true);
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then(res => setPokemon(res.data.results))
            .finally(() => setloading(false));

console.log(Pokemon);
        axios.get("https://pokeapi.co/api/v2/type/")
            .then(res => setTypes(res.data.results))
    }, [])

    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currenPokemon = Pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)
    
    const paginate = (pageNumber)=> {
               setcurrentPage(pageNumber)}

    const serch = (e) => {
        e.preventDefault(); {

            navigate(`/pokemon/${Serch.toLowerCase()}`)

        }
    }

    const filterTypes = (e) => {
        alert("se seleciono " + e.target.value)
        axios.get(e.target.value)
            .then(res => setPokemon(res.data.pokemon))

    }

    const pageNumber = []
    const totalPokemon = Pokemon.length

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); ++i) {
        pageNumber.push(i);
    }


    return (
        <div className='container'>

            <h1 className='title_pokedex'>Bienvenido <b>{user}</b> este el Pokedex Api</h1>

            <form onSubmit={serch} >
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        value={Serch}
                        placeholder="Escribe El Pokemon"
                        onChange={e => (setSerch(e.target.value))} />
                </div>

                <button className="btn btn-success" >Search</button>
            </form>
            <select className='card_option' onChange={filterTypes} >
                <option value=""> SELECCIONA UN TIPO DE POKEMON</option>
                {
                    Types.map(
                        type => (
                            <option key={type.url} value={type.url} > {type.name} </option>
                        )
                    )
                }
            </select>
            <div className='container'>

                    <div className='nav-bar'>
                   
                    <nav >
                        <ul className='pagination' > {pageNumber.map(number => (
                            <ul key={number} className='page-item' > <a onClick={()=> paginate(number)} href="#/pokemon" className='page-link'>
                                {number}</a> </ul>
                        ))}</ul>
                    </nav>
                    </div>


                </div >



                <div className='card_pokemon' >

                    {
                        currenPokemon.map(poke => (
                            <PokemonItem key={poke.name} PokemonUrl={poke.url ? poke.url : poke.pokemon.url} />

                        ))
                    }

pa


            </div>
        </div>
    );
};

export default Pokemon;