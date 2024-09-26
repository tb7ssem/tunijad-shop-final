import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    {
      image: 'https://via.placeholder.com/300x200?text=Green+Sneaker',
      title: 'Nike Sneaker (Green)',
      price: 120,
      description: 'Comfortable green sneakers for everyday wear.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Red+Sneaker',
      title: 'Nike Sneaker (Red)',
      price: 120,
      description: 'Stylish red sneakers for a bold look.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=Blue+Running+Shoes',
      title: 'Adidas Running Shoes',
      price: 150,
      description: 'High-performance blue running shoes for athletes.',
    },
    {
      image: 'https://via.placeholder.com/300x200?text=White+Tennis+Shoes',
      title: 'Puma Tennis Shoes',
      price: 100,
      description: 'Classic white tennis shoes for court play.',
    },
  ];

  return (
    <div className="home">
      <h1 className="home-title">Featured Products</h1>
      <div className="product-grid">
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
    </div>
  );
};

export default Home;