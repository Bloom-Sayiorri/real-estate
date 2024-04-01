import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Header from './components/Header'
import Footer from './components/Footer' 
import SignIn from './pages/SignIn' 

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/signout' element={<SignOut/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
