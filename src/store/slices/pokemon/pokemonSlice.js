import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlace = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true
        },
        setPokemons: (state, action) => {
            console.log(action)
        }
    },
});

// Thunk funcion que ejectuara tarea asincrona que ejecutara una accion de nuestro reducer

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlace.actions