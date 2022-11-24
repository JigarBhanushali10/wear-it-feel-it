import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from '../core/context/AuthContext';
import authService from '../core/services/Auth.service';
import { LoginVideo } from '../shared/components/LoginVideo';


function SignUp() {

    const { storeUserAuthData } = useContext(AuthContext)

    const location = useLocation()
    const redirectPath = location.state?.path

    /**
       * @name initialValues
       * @description sets initial Values of form
       */
    const initialValues = {
        signupName: '',
        signupEmail: '',
        signupPassword: '',
        signupComfirmPassword: '',
    }


    /**
  * @name validationSchema
  * @description sets validation of form usin yup library
*/
    const validationSchema = Yup.object({
        signupName: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is Required!'),
        signupEmail: Yup.string().email('Email must be in valid format.').required('Email is Required'),
        signupPassword: Yup.string().required('Password is Required'),
        signupComfirmPassword: Yup.string().required('Confirm Password is Required').oneOf([Yup.ref('signupPassword')], 'Passwords does not match'),
    })


    /**
    * @name onSubmit
    * @param values.resetForm:string
    * @description submits form and add employee and updates emp details according to condition
    */
    const onSubmit = (values: any, resetForm: () => void) => {

        authService.signUp(values).then(res => {
            resetForm();
            storeUserAuthData(res.user)
            navigate(redirectPath);
        }).catch(err => console.error(err.message))

    };

    /**
    * @name renderError
    * @param message:string
    * @description renders validation of form usin yup library
    */
    const renderError = (message: string) => <p className="text-danger">{message}</p>;
    const navigate = useNavigate()
    return (
        <div className=' p-4 flex-grow-1 '>
            <div className='row align-items-center py-1 h-100'>
                <div className='col-12 col-sm-7 col-xl-3  mx-auto'>
                    <div className='loginComponent '>
                        <h1>
                            Create an account
                        </h1>
                        <p>
                            Do you have an account? <button className='btn btn-outline-dark ' onClick={() => { navigate('/login') }}>Sign In</button>
                        </p>
                        <Formik initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values: any, { resetForm }: any) => {
                                onSubmit(values, resetForm);
                            }}>
                            <Form className='row mb-3'>

                                <div className='col-12 col-sm-6 my-2 '>
                                    <Field type="text" name="signupName" id="signupName" className='loginInput border border-dark px-3  text-secondary w-100' placeholder='Enter Name' />
                                    <ErrorMessage name='signupName' render={renderError} />
                                </div>
                                <div className='col-12 col-sm-6 my-2 '>

                                    <Field type="text" name="signupEmail" id="signupEmail" className='loginInput border border-dark px-3  text-secondary w-100' placeholder='Enter Email' />
                                    <ErrorMessage name='signupEmail' render={renderError} />
                                </div>
                                <div className='col-12 my-2 '>
                                    <Field type="password" name="signupPassword" id="signupPassword" className='loginInput border border-dark px-3  text-secondary w-100' placeholder='Enter Password' />
                                    <ErrorMessage name='signupPassword' render={renderError} />
                                </div>
                                <div className='col-12 my-2 '>
                                    <Field type="password" name="signupComfirmPassword" id="signupComfirmPassword" className='loginInput border border-dark px-3  text-secondary w-100' placeholder='Enter Confirm Password' />
                                    <ErrorMessage name='signupComfirmPassword' render={renderError} />
                                </div>
                                <div className='col-12 mt-3 '>
                                    <button type="submit" className='w-100 btn btn-dark  rounded-0  px-5 py-3 '>Sign Up</button>
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

export default SignUp