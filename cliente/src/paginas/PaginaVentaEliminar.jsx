import Swal from 'sweetalert2';
import {Form, Formik} from 'formik';
import {buscarVta,eliminarVta} from '../api/apiVentas.js';


function PagVentaEliminar() {
    return (
        <div>
            <h1>Borrar Venta</h1>
            <Formik
                initialValues={{
                    id:"",
                }}
                onSubmit={(datoaBuscar, action)=>{
                    try {
                        const respuesta = buscarVta(datoaBuscar.id);    
                        const Vta = respuesta.data || respuesta;
                        const confirmacion = Swal.fire({
                            title: "¿Deseas eliminar este venta ?",
                            text: "Venta: ${values.id}",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Sí, eliminar !",
                            cancelButtonText: 'Cancelar'
                            })
                            if (result.isConfirmed) Swal.fire({
                                title: "Eliminado !",
                                text: "La venta ha sido borrado correctamente.",
                                icon: "success"
                            });
                        
                    } catch (error) {
                        Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: " no lo pudo encontrar la venta !",
                        });                                
                    }
                    

                }}
            >
            {({handleChange, values})=>(
                <Form>
                    <label>Código de la Venta</label>
                    <input type="text" name='id' maxLength={10} size={12} placeholder='Ingrese solo números' value={values.id} onChange={handleChange} required/><br/><br/>
                    <button type='submit'>BUSCAR</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default PagVentaEliminar