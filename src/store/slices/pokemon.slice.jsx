import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonSlice = createSlice({
		name: 'user',
    initialState: "",
    reducers: {

      ChanceUser : (state,action)=> {
         return action.payload
      }
        
    }
})
 
export const { ChanceUser  } = pokemonSlice.actions;

export default pokemonSlice.reducer;