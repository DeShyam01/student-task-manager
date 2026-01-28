import { useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext.jsx'
import { TaskContext } from '../context/TaskContext.jsx'
import '../styles/pages/Login.css'

const Login = () => {
  const { fetchTasks } = useContext(TaskContext)
  const { token, login } = useContext(AuthContext)

  useEffect(()=>{
    (async function(){
      if(token){
      await fetchTasks()
      window.location.href = '/dashboard'
      }
    })()
  },[])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <div className='login'>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="mail" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
