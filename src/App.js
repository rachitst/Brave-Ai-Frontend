import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import TeacherLogin from './pages/TeacherLogin'
import StudentLogin from './pages/StudentLogin'
import TeacherRegister from './pages/TeacherRegister'
import StudentRegister from './pages/StudentRegister'
import Navbar from './Components/Navbar'
import Landing from './pages/Landing'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/landing" />} 
            />
            <Route 
              path="/landing" 
              element = <Landing /> 
            />
            <Route 
              path="/slogin" 
              element={!user ? <StudentLogin /> : <Navigate to="/" />} 
            />
            <Route 
              path="/tlogin" 
              element={!user ? <TeacherLogin /> : <Navigate to="/" />} 
            />
            <Route 
              path="/tregister" 
              element={!user ? <TeacherRegister /> : <Navigate to="/" />} 
            />
            <Route 
              path="/sregister" 
              element={!user ? <StudentRegister /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
