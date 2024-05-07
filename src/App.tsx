import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from '@components/shared/layout/Navbar'
import Footer from '@components/shared/layout/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
