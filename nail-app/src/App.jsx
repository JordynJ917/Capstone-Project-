import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import Footer from './components/footer';
import NavBar from './components/Navbar';
import Header from "./components/Header";
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { SortProvider } from "./context/SortContext";


function App() {
  return (
    <div className='App'>
      <CartProvider>
      <SortProvider>
      <NavBar/>
      <Header />
      <AppRoutes/>      
      <Footer/>
      </SortProvider>
      </CartProvider>
    </div>
  )
}

export default App

