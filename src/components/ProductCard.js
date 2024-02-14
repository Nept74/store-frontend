import React from 'react';
import ProductImage from './ProductImage';

const ProductCard = ({ product }) => {
  const extractDescription = (htmlString) => {
    const marker = '<br><strong>Momentary Switches';
    const index = htmlString.indexOf(marker);
    return index !== -1 ? htmlString.substring(0, index) : htmlString;
  };

  const description = extractDescription(product.bodyHtml);

  return (
    <div className="product-card">
      <ProductImage imageSrc={product.imageSrc} />
      <div className="product-description" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default ProductCard;