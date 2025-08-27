import Home from './Components/Home/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Desc from './Components/Desc/Desc'
import PaintCards from './Components/PaintCards/PaintCards'
import Cards from './Components/Cards/Cards'
import ProductCards from './Components/ProductCards/ProductCards'
import Article from './Components/Article/Article';
import Footer from "./Components/Footer/Footer"
export default function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<>
          
          <Home/>
          <Desc/>
          <PaintCards/>
          <Cards/>
          <ProductCards/>
          <Article/>
          <Footer/>
          </>
          
          }/>
          <Route path='/about' element={<div>About</div>}/>
          <Route path='/products' element={<div>Products</div>}/>
          <Route path='/contact' element={<div>Contact</div>}/>
        </Routes>
      </Router>
    </div>
  )
}
