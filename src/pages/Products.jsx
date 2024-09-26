import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Nike Sneaker (Green)',
      price: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi, dignissimos.',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Nike Sneaker (Red)',
      price: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Animi, dignissimos.',
    },
    // Add more products as needed
  ];

  return (
    <div className="products">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;