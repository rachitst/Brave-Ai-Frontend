import { Link, useNavigate} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate('/landing')
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Teacher and Student Management</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/landing">Home</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar