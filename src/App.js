import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Ошибка получения данных о товарах:', error);
      });
  }, []);

  return (
    <div className="App">
      <main className='Main'>
        <h1 className="app-title">Our products</h1>
        <ProductList products={products} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;