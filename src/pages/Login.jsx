import logo from '@assets/logo/zone style-logo/logo.png'
import imgLogin from '@assets/login.webp'
import { TextField } from '@mui/material'
import TextFieldInput from '@widgets/TextFieldInput'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-body flex flex-col items-center gap-5 font-bold p-10">
          <div className="flex gap-2 items-center">
            <img className='w-10 rounded-lg' src={logo} alt="" />
            <div className="text-xl">Shop e-commerce</div>
          </div>
          <p className='my-5 text-center'>Gain data-based insights, view progress at a glance,<br /> and manage your organization smarter</p>
          <img src={imgLogin} alt="" />
        </div>
        <div className="bg-widget flex flex-col gap-5 justify-center items-center ">
          <div className="flex flex-col gap-3 items-center">
            <div className="text-4xl font-bold">Welcome back</div>
            <p className='text-center'>Etiam quis quam urna. Aliquam odio erat,<br /> accumsan eu nulla in</p>
          </div>
          <div className="flex flex-col gap-3 w-96 items-center">
            <TextFieldInput label='Email' placeholder='Email' variant='standard' />
            <TextFieldInput label='Password' placeholder='Password' variant='standard' type='password' />
            <Link className='text-accent my-3'>Forgot Password</Link>
            <button className="px-40 py-3 bg-green rounded-full font-bold">Login</button>
          </div>
          <div className="relative w-96 my-10 flex items-center justify-center">
            <div className="border w-96  absolute "></div>
            <span className='relative z-10 bg-widget px-3'>or</span>
          </div>
          <div className="flex justify-between gap-5">
            <button className="px-10 border border-accent text-accent rounded-full py-3 gap-3 flex justify-center items-center">
              <i className='icon-google text-red' />
              <span>Google</span>
            </button>
            <button className="px-10 border border-accent text-accent rounded-full py-3 gap-3 flex justify-center items-center">
              <i className='icon-facebook text-blue-600' />
              <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login