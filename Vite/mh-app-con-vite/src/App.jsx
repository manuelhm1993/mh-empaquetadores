import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importar los estilos personalizados con sass sin ningún otro tipo de configuración, pero instalando sass como dependencia
import './estilos.scss';

// Importar los estilos personalizados dentro del objeto styles
import styles from './estilos.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Usar el objeto styles y la clase correspondiente */}
      <h1 className="azul">MHenriquez</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {/* Uso de una variable de entorno, igual que el helper env() de laravel, vite se encarga de toda la configuración */}
          { import.meta.env.VITE_API_KEY }
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
