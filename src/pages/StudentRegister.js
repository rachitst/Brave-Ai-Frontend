import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const StudentRegister = () => {
  const [email, setEmail] = useState('')
  const [Name, setName] = useState('')
  const [Grade, setGrade] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up As Student</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Name:</label>
      <input 
        type="name" 
        onChange={(e) => setName(e.target.value)} 
        value={Name} 
      />
      <label>Grade:</label>
      <input 
        type="subject" 
        onChange={(e) => setGrade(e.target.value)} 
        value={Grade} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default StudentRegister