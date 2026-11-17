import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1>GESTION DE VENTAS</h1>
             <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                 <li><Link to="/cliente">Clientes</Link>
                     <ul>
                        <li><Link to="/cliente/nuevo">Nuevo Cliente</Link></li>
                        <li><Link to="/cliente/mostrar">Mostrar Clientes</Link></li>
                        <li><Link to="/cliente/borrar">Eliminar Cliente</Link></li>
                        <li><Link to="/cliente/cambiar">Modificar Datos del Cliente</Link></li>
                    </ul> 
                 </li>
                <li><Link to="/producto">Productos</Link>
                     <ul>
                        <li><Link to="/producto/nuevo">Nuevo Producto</Link></li>
                        <li><Link to="/producto/mostrar">Mostrar Productos</Link></li>
                        <li><Link to="/producto/borrar">Eliminar Producto</Link></li>
                        <li><Link to="/producto/cambiar">Modificar Datos del Producto</Link></li>
                    </ul>                
                 </li>
                <li><Link to="/venta">Ventas</Link>
                     <ul>
                        <li><Link to="/venta/nuevo">Nueva Venta</Link></li>
                        <li><Link to="/venta/mostrar">Mostrar Ventas</Link></li>
                        <li><Link to="/venta/borrar">Eliminar Venta</Link></li>
                        <li><Link to="/venta/cambiar">Modificar Datos de la Venta</Link></li>
                    </ul>                                
                </li>
            </ul>
        </div>
    )
}

export default NavBar