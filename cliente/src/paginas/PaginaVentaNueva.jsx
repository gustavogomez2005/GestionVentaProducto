import Swal from 'sweetalert2';
import {altavta} from '../api/apiVentas.js';
import {Formik, Form} from 'formik';

function PagVentaNueva() {
    return (
        <div>
            <h1>Agregar Ventas</h1>
            <Formik
                initialValues={{
                    id:"",
                    cant:"",
                    idcli:"",
                    idprod:"",
                }}
                onSubmit={(datosDeLaVenta, actions)=>{
                    try {
                        console.log(datosDeLaVenta);
                        const respuesta = altavta(datosDeLaVenta);
                        actions.resetForm();
                        Swal.fire({
                            title: "Venta ingresada correctamente !!",
                            icon: "success",
                            draggable: true
                        });                                
                    } catch (error) {
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: " no pudo registrar la Venta !",
                        });                                
                    }
                }
            }
            >
            {({handleChange, values})=>(
                <Form>
                    <label>Código de la Venta</label>
                    <input type="text" name='id' value={values.id} onChange={handleChange} placeholder='Ingrese su id' maxLength={10} size={12} required/><br/><br/>
                    <label>Cantidad</label>
                    <input type="text" name='cant' value={values.cant} onChange={handleChange} placeholder='Ingrese la cantidad' maxLength={6} size={8} required/><br/><br/>
                    <label>Código del Cliente</label>
                    <input type="text" name='idcli' value={values.idcli} onChange={handleChange} placeholder='Ingrese el Id del Cliente' maxLength={10} size={12} required/><br/><br/>
                    <label>Código del Producto</label>
                    <input type="text" name='idprod' value={values.idprod} onChange={handleChange} placeholder='Ingrese el Id del Producto' maxLength={10} size={12} required/><br/><br/><br/>
                    <button type='submit'>INGRESAR</button>                                                            
                </Form>
            )}
            </Formik>        
        </div>
    )
}

export default PagVentaNueva