import React from 'react'
import InputField from './InputField'

function Form({formType,btnText}) {
  return (
    <form action="" className="login-form">
        {
            formType=='login'? 
            <p>You don't have a password? Then please <a href="">Sign Up</a></p>
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
                <a href="">I forgot password</a>
            </div>
            :
            <a href=''>Already have account?</a>
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
