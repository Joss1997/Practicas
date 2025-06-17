import { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import CartSidebar from './components/CartSidebar/CartSidebar';
import styles from './App.module.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrito de Compras</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <CartSidebar cartItems={cartItems} />
    </div>
  );
}

export default App;
