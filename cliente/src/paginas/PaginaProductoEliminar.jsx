import {Form, Formik} from 'formik';
import Swal from 'sweetalert2';
import {buscarProd, eliminarProd} from '../api/apiProducto.js';

function PagProdEliminar() {
    return (
        <div>
            <h1>Borrar Productos</h1>
            <Formik
                initialValues={{
                    id:"",
                }}
                onSubmit={ async(objetoProducto, actions)=>{

                    try {
                        const respuesta = await buscarProd(objetoProducto.id);

                        const Producto = respuesta.data || respuesta

                        const confirmacion = await Swal.fire({
                            title: "¿Deseas eliminar este Producto ?",
                            text: `Producto ${Producto.descripcion || objetoProducto.id}`,
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sí, Eliminar !"
                        })
                        if (confirmacion.isConfirmed) {
                            eliminarProd(objetoProducto.id)
                            Swal.fire({
                                title: "Eliminado !",
                                text: "El producto ha sido borrado.",
                                icon: "success"
                            });
                            actions.resetForm()
                        }
                    } catch (error) {
                        Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: " no lo pudo encontrar al Producto !",
                        });                                
                    }
                }}
            >
                {({handleChange, values})=>(
                    <Form>
                        <label>Código del Producto</label>
                        <input type="text" name='id' value={values.id} onChange={handleChange} placeholder='Ingrese el ID' maxLength={10} size={12}/><br/><br/>
                        <button type='submit'>BUSCAR</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default PagProdEliminar