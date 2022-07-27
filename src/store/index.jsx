import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './slices/pokemon.slice'

export default configureStore({
  reducer: {
        
    user:pokemonSlice

	}
})