import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Clientes from './pages/Clientes'
import Editarcliente from './pages/EditarCliente'
import Nuevocliente from './pages/NuevoCliente'
import Vercliente from './pages/VerCliente'

function App() {

  console.log(import.meta.env);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/clientes' element={<Layout/>}>
            <Route index element={<Clientes/>} />
            <Route path='nuevo' element={<Nuevocliente/>} />
            <Route path='editar/:id' element={<Editarcliente/>} />
            <Route path=':id' element={<Vercliente/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
