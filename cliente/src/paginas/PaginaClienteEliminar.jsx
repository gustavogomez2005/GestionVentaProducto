import Swal from 'sweetalert2';
import {eliminarCli, buscarCli} from '../api/apiCliente.js';
import {Formik, Form} from 'formik';


function PagClienteBorrar() {
    return (
        <div>
            <h1>Baja de Clientes</h1>
            <Formik
                initialValues={{
                    id:"",
                }}
                onSubmit={async (values, actions)=>{
                    try {
                        // 1. Buscar al cliente
                        const respuesta = await buscarCli(values.id);
                        const cliente = respuesta.data || respuesta;

                        // 2. Mostrar alerta de confirmación con los datos del cliente
                        const confirmacion = await Swal.fire({
                            title: '¿Deseas eliminar este cliente?',
                            text: `Cliente: ${cliente.nombre || values.id}`,
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#d33',
                            cancelButtonColor: '#3085d6',
                            confirmButtonText: 'Sí, eliminar',
                            cancelButtonText: 'Cancelar'
                        });

                        // 3. Ejecutar borrado si el usuario confirma
                        if (confirmacion.isConfirmed) {
                            await eliminarCli(values.id);

                            await Swal.fire({
                                icon: 'success',
                                title: '¡Eliminado!',
                                text: 'El cliente ha sido borrado correctamente.',
                            });

                            actions.resetForm();
                        }

                    } catch (error) {
                        Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: " no lo pudo encontrar al cliente !",
                        });                                
                    }
                }}
            >
            {({handleChange, values})=>(
                <Form>
                    <label>Código del Cliente</label>
                    <input type="text" name='id' placeholder='Ingrese el ID' value={values.id} onChange={handleChange} maxLength={10} size={12} required/>
                    <button type='submit'>BUSCAR</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default PagClienteBorrar