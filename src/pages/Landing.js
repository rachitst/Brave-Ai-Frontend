import React from 'react'
import { useLogin } from "../hooks/useLogin"
import { useNavigate  } from 'react-router-dom';

function Landing() {
    const {error, isLoading} = useLogin()
    const navigate = useNavigate();
    const handleStudent = async (e) => {
        e.preventDefault()
        navigate('/slogin');
      }
    const handleTeacher = async (e) => {
        e.preventDefault()
        navigate('/tlogin');
      }
    const handleTregister = async (e) => {
        e.preventDefault()
        navigate('/tregister')
      }
    const handleSregister = async (e) => {
        e.preventDefault()
        navigate('/sregister')
      }
  return (
    <>
    <form className="login" >
      <h3>Teacher</h3>
      
      <button disabled={isLoading} onClick={handleTregister}>Register</button>
      {error && <div className="error">{error}</div>}

      <button disabled={isLoading} onClick={handleTeacher}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
    <form className="login">
      <h3>Student</h3>
      

      <button disabled={isLoading} onClick={handleSregister}>Register</button>
      {error && <div className="error">{error}</div>}
      <button disabled={isLoading} onClick={handleStudent}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
    </>
  )
}

export default Landing