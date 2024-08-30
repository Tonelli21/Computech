import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Seccion from './componentes/section/Seccion'
import Menu from './componentes/menu/menu'

import ListaProductos from './componentes/Listado/ListaProductos'
import FormularioContacto from './componentes/Formulario/FormularioContacto'
import Login from './componentes/LoginRegistro/Login'

function App() {


  return (
    <Router>
      <div className='Conteiner'>
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path='/' element={<Seccion/>} />
            <Route path='/Productos' element={<ListaProductos/>} >
            </Route>
            <Route path='/productos' element={<ListaProductos/>} >
            </Route>
            <Route path='/Formulario' element={<FormularioContacto />} />
            
            <Route path="/login" element={<Login />} />
            
          </Routes>

        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App
