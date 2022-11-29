import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import authService from "../core/services/Auth.service";
import { LoginVideo } from '../shared/components/LoginVideo';





const Login=()=> {
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path

    /**
     * @name initialValues
     * @description sets initial Values of form
     */
    const initialValues = {
        signInEmail: '',
        signInPassword: '',
    }


    /**
  * @name validationSchema
  * @description sets validation of form usin yup library
*/
    const validationSchema = Yup.object({
        signInEmail: Yup.string().email('Email must be in valid format.').required('Email is Required'),
        signInPassword: Yup.string().required('Password is Required'),
    })

    /**
    * @name renderError
    * @param message:string
    * @description renders validation of form usin yup library
    */
    const renderError = (message: string) => <p className="text-danger">{message}</p>;


    /**
   * @name onSubmit
   * @param values.resetForm:string
   * @description submits form and  navigates to home 
   */
    const onSubmit = (values: any, resetForm: () => void) => {
        authService.signIn(values).then(() => {
            resetForm();
            navigate(redirectPath);
        }).catch(error => console.error(error)
        )

    };


    return (
        <div className=' p-4 flex-grow-1 bg-secondary'>
            <div className='container row align-items-center py-1 h-100 mx-md-auto'>
                <div className='col-12 col-sm-7 col-xl-3  mx-auto'>
                    <div className='loginComponent '>
                        <h1>
                            Welcome
                        </h1>
                        <p>
                            Don't have an account? <button className='btn btn-outline-dark ' onClick={() => { navigate('/signUp') }}>Sign Up</button>
                        </p>
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values: any, { resetForm }: any) => {
                                onSubmit(values, resetForm);
                            }}>
                            <Form className='row mb-3'>
                                <div className='col-12  my-2 '>
                                    {/* login email field */}
                                    <Field type="text" name="signInEmail" id="signInEmail" className='loginInput border border-dark px-3  text-dark w-100' placeholder='Enter Email' />
                                    <ErrorMessage name='signInEmail' render={renderError} />
                                </div>
                                <div className='col-12 my-2 '>
                                    {/* login password field */}
                                    <Field type="password" name="signInPassword" id="signInPassword" className='loginInput border border-dark px-3  text-dark w-100' placeholder='Enter Password' />
                                    <ErrorMessage name='signInPassword' render={renderError} />
                                </div>
                                <div>
                                    <button type='submit' className='btn btn-dark  rounded-0  px-5 py-3 col-12 mt-3'>Sign In</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <LoginVideo />
            </div>
        </div>
    )
}

export default Login