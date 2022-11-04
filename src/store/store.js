import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlace } from './slices/pokemon/pokemonSlice'


export const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        pokemons: pokemonSlace.reducer
    },
})