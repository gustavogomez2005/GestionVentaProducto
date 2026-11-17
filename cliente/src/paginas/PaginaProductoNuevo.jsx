import {Formik, Form} from 'formik';
import Swal from 'sweetalert2';
import {altaProd} from '../api/apiProducto.js';

function PagProdNuevo() {
    return (
        <div>
            <h1>Agregar Productos</h1>
            <Formik 
                initialValues={{
                    id: "",
                    descri:"",
                    precio:"",
                }}
                onSubmit={ async(datosProducto, actions)=>{
                    try {
                        console.log(datosProducto);
                        const respuesta = await altaProd(datosProducto);
                        console.log(respuesta);
                        actions.resetForm();
                        Swal.fire({
                            title: "Producto agregado correctamente !!",
                            icon: "success",
                            draggable: true
                        });                                
                    } catch (error) {
                        Swal.fire({
                            icon: "error",
                            title: "Error...",
                            text: " no pudo agregar al Producto !",
                        });                            
                    }
            }}
            >
            {({handleChange, values})=>(
                <Form>
                    <label>Codigo del Producto</label>
                    <input type="text" name='id' maxLength={10} placeholder='Ingrese el id' size={12} required value={values.id} onChange={handleChange}/><br/><br/>
                    <label>Descripción</label><br/>
                    <textarea name="descri" id="" rows={10} cols={22} placeholder='Ingrese la descripción del producto' required value={values.descri} onChange={handleChange}></textarea><br/><br/>
                    <label>Precio</label>
                    <input type="text" name='precio' maxLength={10} placeholder='Ingrese el Precio Unitario' size={12} required value={values.precio} onChange={handleChange}/><br/><br/><br/>
                    <button type='submit'>INGRESAR</button>                                        
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default PagProdNuevo