import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Header from './components/Header'
import PrivateRoutes from "./utils/PrivateRoutes"
import { Container } from "react-bootstrap"


function App() {


  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<Container
                                          className="d-flex align-items-center justify-content-center" 
                                          style={{minHeight: "100vh"}}
                                        >
                                          <div className="w-100" style={{maxWidth: '400px'}}>
                                            <Login />
                                          </div>
                                        </Container>
                                        }
          />
          <Route path='/signup' element={<Container
                                          className="d-flex align-items-center justify-content-center" 
                                          style={{minHeight: "100vh"}}
                                        >
                                          <div className="w-100" style={{maxWidth: '400px'}}>
                                            <Signup />
                                          </div>
                                        </Container>
                                        }
          />
          <Route element={<PrivateRoutes/>}>
            <Route path='/' element={<Homepage/>} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App

{/* <Container
className="d-flex align-items-center justify-content-center" 
style={{minHeight: "100vh"}}
>
<div className="w-100" style={{maxWidth: '400px'}}>
  <Signup />
</div>
</Container> */}