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
        <><div className='pokebole'>
            <div className='detail'>
 
            </div>

        </div><div className='container aline-center'>         
                <h2>HOLA ENTRENADOR !!!</h2>
                <h3 className="font-monospace mt-2">Dame tu nombre para poder comenzar</h3>
                <form onSubmit={submit}>
                    <input type="text"
                        className="form-control"
                        placeholder='coloca aqui tu nombre'
                        value={PokemonInput}
                        onChange={e => setPokemonInput(e.target.value)} />
                    <button>Submit</button>
                </form>


            </div></>
    );
};

export default UserInput;