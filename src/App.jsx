import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Signup from "./pages/Signup"
import Homepage from "./pages/Homepage"
import Watchlist from "./pages/Watchlist"
import Login from "./pages/Login"
import Header from './components/Header'
import PrivateRoutes from "./utils/PrivateRoutes"
import './App.css'
import axios from 'axios'




function App() {

  const [coins, setCoins] = useState([])
  const [favorites, setFavorites] = useState([])
  const [numCoins, setNumCoins] = useState(20)
  const [reverse, setReverse] = useState(false)

  const getData = async () => {
    try {
      const res = await axios.get(`https://api.coincap.io/v2/assets?limit=${numCoins}`)
      if (reverse === false) {
      setCoins(res.data.data)
      }
      else {
        setCoins(res.data.data.reverse())
      }
    }
    catch (err) {
      console.log('err', err)
    }
  }


  useEffect(() => {
    getData()
    let id = setInterval(() => {
      getData()
    }, 5000)

    return () => {
      clearInterval(id)
    }
  }, [numCoins, reverse])

  const handleMoreClick = () => {
    setNumCoins(() => numCoins + 20)
  }


  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Homepage favorites={favorites} setFavorites={setFavorites} coins={coins} setCoins={setCoins} handleMoreClick={handleMoreClick} reverse={reverse} setReverse={setReverse}/>} />
          <Route element={<PrivateRoutes />}>
            <Route path='/watchlist' element={<Watchlist favorites={favorites} coins={coins} setFavorites={setFavorites} />} />
          </Route>
          <Route path="*" element={<h2>Error 404</h2>} />
        </Routes>
      </AuthProvider>
    </Router>

  )
}

export default App


