
import { Routes , Route} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import LogIn from './pages/LogIn'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LogIn/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path="/productDetails/:id" element={<ProductDetails/>}/>

    </Routes>
    </>
  )
}

export default App
