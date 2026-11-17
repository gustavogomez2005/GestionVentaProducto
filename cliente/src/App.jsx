import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PagCliente from './paginas/PaginaCliente';
import PagClienteBorrar from './paginas/PaginaClienteEliminar';
import PagClienteCambiar from './paginas/PaginaClienteModificar';
import PagClienteMostrar from './paginas/PaginaClienteMostrar';
import PagClienteNuevo from './paginas/PaginaClienteNuevo';

import PagProducto from './paginas/PaginaProducto';
import PagProdMostrar from './paginas/PaginaProductoMostrar';
import PagProdEliminar from './paginas/PaginaProductoEliminar';
import PagProdModificar from './paginas/PaginaProductoModificar';
import PagProdNuevo from './paginas/PaginaProductoNuevo';

import PagVenta from './paginas/PaginaVentas';
import PagVentaNueva from './paginas/PaginaVentaNueva';
import PagVentaEliminar from './paginas/PaginaVentaEliminar';
import PagVentaModificar from './paginas/PaginaVentaModificar';
import PagVentaMostrar from './paginas/PaginaVentaMostrar';

import PagInicio from './paginas/PaginaInicio';

import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<PagInicio></PagInicio>}></Route>
        <Route path='/cliente' element={<PagCliente></PagCliente>}></Route>
        <Route path='/cliente/nuevo' element={<PagClienteNuevo></PagClienteNuevo>}></Route>                
        <Route path='/cliente/mostrar' element={<PagClienteMostrar></PagClienteMostrar>}></Route>                
        <Route path='/cliente/borrar' element={<PagClienteBorrar></PagClienteBorrar>}></Route>                
        <Route path='/cliente/cambiar' element={<PagClienteCambiar></PagClienteCambiar>}></Route>                                                                

        <Route path='/producto' element={<PagProducto></PagProducto>}></Route>
        <Route path='/producto/mostrar' element={<PagProdMostrar></PagProdMostrar>}></Route>
        <Route path='/producto/borrar' element={<PagProdEliminar></PagProdEliminar>}></Route>
        <Route path='/producto/nuevo' element={<PagProdNuevo></PagProdNuevo>}></Route>
        <Route path='/producto/cambiar' element={<PagProdModificar></PagProdModificar>}></Route>                        

        <Route path='/venta' element={<PagVenta></PagVenta>}></Route>
        <Route path='/venta/nuevo' element={<PagVentaNueva></PagVentaNueva>}></Route>
        <Route path='/venta/borrar' element={<PagVentaEliminar></PagVentaEliminar>}></Route>
        <Route path='/venta/cambiar' element={<PagVentaModificar></PagVentaModificar>}></Route>
        <Route path='/venta/mostrar' element={<PagVentaMostrar></PagVentaMostrar>}></Route>                                
      </Routes>
    </>
  )
}

export default App;