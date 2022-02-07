import './Cart.css';
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormCart(props) {
  return (
    <div className="App">
        <Formik
            initialValues={{ nombre: "", apellido: "", telefono: "", email: "", email2: "" }}
            validate={(values) => {
            const errors = {};
            if (!values.nombre) {
                errors.nombre = "Ingresar Nombre";
            }
            if (!values.apellido) {
                errors.apellido = "Ingresar Apellido";
            }
            if (!values.telefono) {
                errors.telefono = "Ingresar Telefono";
            }else if(!/^[0-9]{9,}$/i.test(values.telefono)){
                errors.telefono = "Formato Invalido (9 Digitos)"
            }
            if (!values.email) {
                errors.email = "Ingresar Email";
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email = "Formato Invalido";
            }
            if (!values.email2) {
                errors.email2 = "Ingresar Email";
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email2)){
                errors.email2 = "Formato Invalido";
            }
            if(values.email !== values.email2){
                errors.email2 = "Emails no coinciden"
            }
            return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                props.realizarCompra(values.nombre, values.apellido, values.email, values.telefono)
            }, 400);
            }}
        >
            {({ isSubmitting }) => (
            <Form>
                <label className='textoForm'>Nombre</label>
                <br />
                <Field type="text" name="nombre" />
                <br />
                <ErrorMessage name="nombre" component="div" className='errorForm' />
                <br />
                <label className='textoForm'>Apellido </label>
                <br />
                <Field type="text" name="apellido" />
                <br />
                <ErrorMessage name="apellido" component="div" className='errorForm' />
                <br />
                <label className='textoForm'>Telefono</label>
                <br />
                <Field type="number" name="telefono" />
                <br />
                <ErrorMessage name="telefono" component="div" className='errorForm' />
                <br />
                <label className='textoForm'>Email </label>
                <br />
                <Field type="text" name="email" />
                <br />
                <ErrorMessage name="email" component="div" className='errorForm' />
                <br />
                <label className='textoForm'>Confirmar Email </label>
                <br />
                <Field type="text" name="email2" />
                <br />
                <ErrorMessage name="email2" component="div" className='errorForm' />
                <br />
                <button type="submit" className="generarOrden" disabled={isSubmitting}>Generar Orden</button>
            </Form>
            )}
        </Formik>
    </div>
  );
}

export default FormCart;
