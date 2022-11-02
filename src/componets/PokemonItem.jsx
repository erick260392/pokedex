import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonItem = ({PokemonUrl}) => {

const navigate = useNavigate();
const [Pokemon, setPokemon] = useState({});

    useEffect(() => {

        axios.get(PokemonUrl)
        .then(res=> setPokemon(res.data) )
  
    }, [])

  
    console.log(Pokemon);


   

    return (
        <div className='sub_card' onClick={()=>(navigate(`/pokemon/${Pokemon.id}`))}>
             <h1> {Pokemon.name}</h1>
            <img src={Pokemon.sprites?.other.home.front_default} />
            <h2>{Pokemon.types?.[0]?.type.name}/{Pokemon.types?.[1]?.type.name}</h2>
           <h3>type</h3>
           <div className='card_info' >

            <div className='card'>
            <h2>Defense</h2>
            <h3>{Pokemon.stats?.[2].base_stat}</h3>
            </div>

            <div className='card'>
            <h2>HP</h2>
            <h3>{Pokemon.stats?.[0].base_stat}</h3>
            </div>

            <div className='card'>
            <h2>Attack</h2>
            <h3>{Pokemon.stats?.[1].base_stat}</h3>
            </div>

            <div className='card'>
            <h2>Speed</h2>
            <h3>{Pokemon.stats?.[5].base_stat}</h3>
            </div>

         
</div>
     
        </div>
    );
};

export default PokemonItem;