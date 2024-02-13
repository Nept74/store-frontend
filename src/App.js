import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  // Функция для отображения изображения на канвасе
  const drawImageOnCanvas = (imageSrc, canvas) => {
    const context = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = () => {
      const width = image.width;
      const height = image.height;
      const aspectRatio = width / height;
      const canvasWidth = 200;
      const canvasHeight = canvasWidth / aspectRatio;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    };
    image.src = imageSrc;
  };
  const extractDataBeforeMarker = (htmlString) => {
    const marker = '<br><strong>Momentary Switches';
    const index = htmlString.indexOf(marker);
    return index !== -1 ? htmlString.substring(0, index) : htmlString;
  };

  return (
    <div className="App">
      <h1 className="app-title">Our products</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="canvas-container">
              <canvas
                id={`canvas-${product.id}`}
                className="product-image"
                ref={canvas => drawImageOnCanvas(product.imageSrc, canvas)}
              />
            </div>
            <div className="product-description" dangerouslySetInnerHTML={{ __html: extractDataBeforeMarker(product.bodyHtml) }}></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

