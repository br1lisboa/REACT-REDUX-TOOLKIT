import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks"

export const PokemonApp = () => {


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

            <ul>
                <li>Hola</li>
                <li>Hola</li>
                <li>Hola</li>
            </ul>

        </>


    )
}
