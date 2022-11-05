import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {

    const { pokemons, page, isLoading } = useSelector(state => state.pokemons)

    /* dipatch de mis acciones */
    const dispatch = useDispatch()

    /* si yo quiero hacer algo cuando el componente es creado una vez, y solo una vez, uso el useEffect */
    useEffect(() => {

        dispatch(getPokemons())

    }, [])

    return (
        <>

            <h1>PokemonApp</h1>
            <hr />

            <span>
                Loading: {isLoading ? 'True' : 'False'}
            </span>

            <ul>
                {
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
            </ul>

            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                Next
            </button>

        </>


    )
}
