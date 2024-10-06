
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import Basket from './Pages/Basket';
import Wish from './Pages/Wish';
import Details from './Pages/Details';
import About from './Pages/Wish';
import Contact from './Pages/Basket';
function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>

        <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/add' element={<AddPage/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/:id' element={<Details/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </HelmetProvider>
  
  )
}

export default App
