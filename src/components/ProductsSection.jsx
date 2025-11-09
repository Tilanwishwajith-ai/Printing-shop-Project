// src/components/ProductsSection.jsx
import React, { useState, useEffect } from 'react';


// Placeholder data for products
const initialProducts = [
  { id: 1, name: 'Custom Stickers & Labels', price: 'LKR 10+', category: 'Printing', image: 'product1.jpg' },
  { id: 2, name: 'POSM (Point of Sale Materials)', price: 'LKR 500+', category: 'Printing', image: 'product2.jpg' },
  { id: 3, name: 'Bill Books & Invoices', price: 'LKR 300+', category: 'Printing', image: 'product3.jpg' },
  { id: 4, name: 'A4 & A5 Leaflets', price: 'LKR 20+', category: 'Printing', image: 'product4.jpg' },
  { id: 5, name: 'Tea Packaging Bags (Unprinted)', price: 'LKR 5+', category: 'Packaging', image: 'product5.jpg' },
  { id: 6, name: 'Company Brochures', price: 'LKR 150+', category: 'Printing', image: 'product6.jpg' },
];

// This component will handle the automatic background image sliding
const BackgroundSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, [images, interval]); // Re-run effect if images or interval change

  return (
    <div className="background-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` }}
        />
      ))}
    </div>
  );
};

// Placeholder component for product images - now using the actual images from public folder
const ProductCardImage = ({ src, alt }) => (
  <div className="product-card-image-wrapper">
    <img 
      src={`${process.env.PUBLIC_URL}/${src}`} 
      alt={alt} 
      className="product-card-actual-image" 
    />
  </div>
);


const ProductsSection = () => {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState('name');

  // Images for the background slider
  const backgroundImages = [
    'product01.jpg',
    'product02.jpg',
    'product03.jpg',
    'product04.jpg',
  ];
  
  // Sorting logic (simplified)
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    // Simple logic for price sorting (assuming LKR amounts)
    if (sortBy === 'price') {
        const priceA = parseFloat(a.price.replace('LKR ', '').replace('+', ''));
        const priceB = parseFloat(b.price.replace('LKR ', '').replace('+', ''));
        return priceA - priceB;
    }
    return 0;
  });

  return (
    <section id="products" className="products-section">
      {/* Background Slider */}
      <BackgroundSlider images={backgroundImages} interval={6000} /> {/* 6 seconds per image */}

      <div className="products-content"> {/* This will layer on top of the background slider */}
        <h2 className="section-title">Our Products Range</h2>
        <p className="section-subtitle">
          High-quality Offset Printing & Flexible Packaging Materials.
        </p>

        <div className="products-container">
          <div className="filter-bar">
            <p className="results-info">Showing {sortedProducts.length} results</p>
            <select 
              className="sort-select" 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          <div className="products-grid">
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                {/* Using ProductCardImage to display actual product images */}
                <ProductCardImage src={product.image} alt={product.name} /> 
                
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">Starting from {product.price}</p>
                  <div className="product-actions">
                    <button className="btn btn-primary">Enquire Now</button>
                    <button className="btn btn-secondary">Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;