import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {

    /* esta funcion se va a mandar a llamar con el argumento del dispatch, para hacer el dispatch de otra accion */
    /* segundo argumento es el getState, que lo mandamos a llamar para tener todo el routeState */
    return async (dispatch, getState) => {

        dispatch(startLoadingPokemons())

        //TODO: realizar peticion http - luego de esta tarea async
        /* Peticion con fetch >>>>>>>>>>>>>>>>>>>>>>>>>>>*/
        /* const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = await resp.json() */

        /* Peticion con axios >>>>>>>>>>>>>>>>>>>>>>>>>>> */
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        /* console.log(resp) */

        //En el action, payload, se manda este objeto
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))

    }

}