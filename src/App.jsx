
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";



import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/footer';


function App() {
 

  return (
    <>
      <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog/:id" element={<Details />} />  
                </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
