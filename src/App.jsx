import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Header from './components/Header'
import PrivateRoutes from "./utils/PrivateRoutes"
import './App.css'


function App() {


  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Homepage/>} />
          <Route element={<PrivateRoutes/>}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App


