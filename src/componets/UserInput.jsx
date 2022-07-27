import React, { useState } from 'react';
import { ChanceUser } from '../store/slices/pokemon.slice';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';

const UserInput = () => {

const dispach = useDispatch()    
const navigate = useNavigate()
const [PokemonInput, setPokemonInput] = useState("")

const submit = (e)=>{
    e.preventDefault();{
        alert(`HOLA!!! ${PokemonInput}` )
        dispach(ChanceUser(PokemonInput))
        navigate("/pokemon")

    }
}


    return (
        <div className='container mt-5'>
            <img src="data:image/png;base64,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" alt="" />
       <h2 className="text-danger">HOLA ENTRENADOR !!!</h2>
       <h3 className="font-monospace mt-2">Dame tu nombre para poder comenzar</h3>
            <form onSubmit={submit} >
                <input type="text" 
                className="form-control"
                placeholder='coloca aqui tu nombre' 
                value={PokemonInput}
                onChange ={e=> setPokemonInput(e.target.value)} />
                <button className="btn btn-success mt-5" >Submit</button>
            </form>
        </div>
    );
};

export default UserInput;