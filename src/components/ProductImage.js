import React from 'react';

const ProductImage = ({ imageSrc }) => {
  return (
    <div className="canvas-container">
      <img src={imageSrc} className="product-image" alt="Product" />
    </div>
  );
};

export default ProductImage;