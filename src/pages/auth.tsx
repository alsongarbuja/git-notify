import { Link } from "react-router-dom"

const Auth = () => {
  return (
    <main className='login-screen'>
      <h1>Login to continue</h1>
      <Link to="/home" className='login-btn'>Github</Link>
    </main>  
  )
}

export default Auth