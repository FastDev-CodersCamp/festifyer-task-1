import React from 'react'
import InputField from './InputField'
import { Link } from "react-router-dom";

function Form({formType,btnText}) {
  return (
    <form action="" className="login-form">
        {
            formType=='login'? 
            <p>You don't have a password? Then please <Link to={'/sign-up'}>Sign Up</Link></p>
            :
            <p>Enter your email address and your password will be reset and email to you.</p>
        }
        <InputField type={'email'} placeHolder={'Email'}/>
        {
            formType=='login' &&
            <InputField type={'password'} placeHolder={'Password'}/>
        }
        {
            formType=='login'? 
            <div>
                <label htmlFor="">
                    <span>Remember me</span>
                    <input type="checkbox" name="" id="" />
                </label>                
                <Link to={'/reset-password'}>I forgot password</Link>
            </div>
            :
            <Link to={'/login'}>Already have account?</Link>
        }
        {
            formType=='login'? 
            <button>{btnText}</button>
            :
            <button>{btnText}</button>
        }
    </form>
  )
}

export default Form
