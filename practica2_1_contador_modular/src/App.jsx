import { useState } from 'react';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const [subtotal, setSubtotal] = useState(0);

  const handleAddToCart = (price, quantity) => {
    setSubtotal(prev => prev + price * quantity);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        Tienda Online
      </h1>

      <ProductCard onAddToCart={handleAddToCart} />

      <div style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Poppins, sans-serif' }}>
        <h2>🛒 Subtotal del carrito: ${subtotal.toFixed(2)} MXN</h2>
      </div>
    </div>
  );
}

export default App;
