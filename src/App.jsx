
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './slices/counter/counterSlice'

import reactLogo from './assets/react.svg'
import './App.css'



function App() {
  /* Para seleccionar o LEER algo del store el hook useSelector de redux */
  const { counter } = useSelector(state => state.counter) /* Este counter sale del nombre que le pusimos al initalstate del counterSlice */

  /* Para disparar una accion o hacer el DISPATCH o modificar el state usamos el hook useDispatch de redux */
  const dispatch = useDispatch()


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>count is {counter}</h1>

      <div className="card">

        <button onClick={() => dispatch(increment())}>{/* Aca va el dispatch y le paso la accion (funcion) por parametro */}
          Increment
        </button>

        <button onClick={() => dispatch(decrement())}>{/* Aca va el dispatch y le paso la accion (funcion) por parametro */}
          Decrement
        </button>

        <button onClick={() => dispatch(incrementBy(3))}>{/* Aca va el dispatch y le paso la accion (funcion) por parametro */}
          Increment By 2
        </button>

      </div>

    </div>
  )
}

export default App
