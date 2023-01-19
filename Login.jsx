import React from 'react'
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    <div className='wrapper bg-light d-flex align-items-center justify-content-center w-100'>
      <div className='Login'>
        <h1 className='mb-3'>Login Form</h1>
        <form className='needs-validation'>
        <div className='form-group was-validated mb-2'>
          <label htmlFor='text' className='form-label'>First Name</label>
          <input type="text" className='form-control' required></input>
        </div>

        <div className='form-group was-validated mb-2'>
          <label htmlFor='text' className='form-label'>Last Name</label>
          <input type="text" className='form-control'></input>
          </div>

          <div className='form-group was-validated mb-2'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type="password" className='form-control' required></input>
          <div className='invalid-feedback'>Please enter your Password</div>
          </div>

          <div className='form-group was-validated mb-2'>
          <label htmlFor='password' className='form-label'>Confirm Password</label>
          <input type="password" className='form-control' required></input>
          </div>

          <div className='form-group form-check mb-2'>
          <label htmlFor='check' className='form-check-label'>Remember me</label>
          <input type="checkbox" className='form-check-input'></input>
          </div>

          <button type="submit" className='btn btn-success w-100 mt-2'>SIGN IN</button>
          </form>
            





      </div>
      </div>
    
  )
}

export default Login