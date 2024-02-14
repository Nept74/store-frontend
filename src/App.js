import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from './redux/actions';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:4000/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.error('Ошибка получения данных о товарах:', error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <main className='Main'>
        <h1 className="app-title">Our products</h1>
        <ProductList />
      </main>
      <Footer/>
    </div>
  );
}


export default App;