import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from '@components/shared/layout/Navbar'
import Footer from '@components/shared/layout/Footer'
import { ScrollRestoration } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App
