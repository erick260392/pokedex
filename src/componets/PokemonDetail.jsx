import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {


    const { id } = useParams();
    const [Detail, setDetail] = useState({})


    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setDetail(res.data))
            .catch(error => error(alert("ESE POKEMON NO EXISTE")))

    }, [])

    console.log(Detail);



    return (
        <div className='card_detail'>
            <h1>Pokemon Detail</h1>
            <img src={Detail.sprites?.other.dream_world.front_default} />
               <div className='card_text'>

            <h2>#{Detail.order}</h2>
            <h2>{Detail.name}</h2>

            <h3>Weight: <b>{Detail.weight}</b></h3> <h3>Height: <b>{Detail.height}</b></h3>
               </div>

<div className='card_text'>
            <h2>Type</h2>
            <h3>{Detail.types?.[0]?.type.name}</h3>
            <h3>{Detail.types?.[1]?.type.name}</h3>

</div>

<div className='card_text' >
            <h2>abilities</h2>

            <h3>{Detail.abilities?.[0]?.ability.name}</h3>
            <h3>{Detail.abilities?.[1]?.ability.name}</h3>

</div>
<div className='card_text'>

            <h2>Stast</h2>
            <h3>{Detail.stats?.[0]?.stat.name}:{Detail.stats?.[0].base_stat}</h3>
            <h3>{Detail.stats?.[1]?.stat.name}:{Detail.stats?.[1].base_stat}</h3>
            <h3>{Detail.stats?.[2]?.stat.name}:{Detail.stats?.[2].base_stat}</h3>
            <h3>{Detail.stats?.[3]?.stat.name}:{Detail.stats?.[3].base_stat}</h3>
            <h3>{Detail.stats?.[4]?.stat.name}:{Detail.stats?.[4].base_stat}</h3>
            <h3>{Detail.stats?.[5]?.stat.name}:{Detail.stats?.[5].base_stat}</h3>
</div>

            
        </div>


    );
};

export default PokemonDetail;