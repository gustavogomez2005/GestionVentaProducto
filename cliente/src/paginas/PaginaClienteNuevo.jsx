import {Formik, Form} from 'formik';
import {altaCli} from '../api/apiCliente.js';
import Swal from 'sweetalert2';

function PagClienteNuevo() {
    return (
        <div>
            <h1>Alta de Clientes</h1>
             <Formik
                initialValues={{
                    id:"",
                    nom: "",
                    direc: "",
                    tel: "",
                    ciu: "",
                }}
                onSubmit={ async(valores, actions)=>{
                        console.log(valores);
                        console.log(valores.ciu);                        
                    try {
                        const respuesta = await altaCli(valores);
                        console.log(respuesta);
                        actions.resetForm()
                        Swal.fire({
                        title: "Cliente agregado correctamente !!",
                        icon: "success",
                        draggable: true
                        });                        
                    } catch (error) {
                        Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: " no lo pudo agregar al cliente !",
                        });                        
                    }
                    
                }}
             >
             {({handleChange, values})=>(
                <Form>
                    <label>Codigo: </label>
                    <input type="text" name='id'  onChange={handleChange} value={values.id} maxLength={10} size={12}/><br/><br/>
                    <label>Nombre: </label>
                    <input type="text" name='nom' onChange={handleChange} value={values.nom} placeholder='ingrese su nombre completo' maxLength={30} size={35}/><br/><br/>
                    <label>Dirección: </label>
                    <input type="text" name='direc' onChange={handleChange} value={values.direc} maxLength={50} size={55}/>
                    <label>Teléfono: </label>
                    <input type="text" name='tel' onChange={handleChange} value={values.tel} maxLength={25} size={30} placeholder='ingrese sin código de área'/><br/><br/>
                    <label>Ciudad: </label>
                    <input type="text" name='ciu' onChange={handleChange} value={values.ciu} maxLength={50} size={60}/><br/><br/><br/>
                    <button type='submit'>INGRESAR</button>
                </Form>
             )}
            </Formik>
        </div>
    )
}

export default PagClienteNuevo