import React from 'react'

const Login = () => {
  return (
    <div className='container my-4 px-3 py-3'>
      <form className='border border-success rounded '>
        <h2 className='my-5 text-primary text-center'>Login</h2>
  <div className="mb-3">
    <label for="exampleInputEmail1 text-white" className="form-label text-white">Email address</label>
    <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1  w-25" className="form-label  text-white ">Password</label>
    <input type="password" className="form-control input-sm" id="exampleInputPassword1" />
  </div>

  <div className='py-4 px-3 mt-3 d-flex  border' style={{"width":"23%","height":"15%"}}>
            <img className='mx-3 mb-3' style={{"height":"30"}} alt=''  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
             <p class="btn-text text-white">
             <a className="nav-link active " aria-current="page" href="http://localhost:3000/google">Sign in with google</a>
            </p>
            </div>

  <button type="submit" className="btn btn-primary mt-3">Submit</button>
</form>
    </div>
  )
}

export default Login
