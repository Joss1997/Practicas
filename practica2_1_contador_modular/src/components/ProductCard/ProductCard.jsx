import { useState } from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const price = 499.0;

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAdd = () => {
    onAddToCart(price, quantity);
  };

  return (
    <div className={styles.card}>
      <img
        src="https://minisomx.vtexassets.com/arquivos/ids/207106/Aud-fonos-De-Diadema-De-Cable-Plegables-Gris-Negro-1-8581.jpg?v=637867965886200000"
        alt="Producto"
        className={styles.image}
      />
      <h2 className={styles.name}>Audífonos Bluetooth</h2>
      <p className={styles.price}>${price.toFixed(2)} MXN</p>

      <div className={styles.counter}>
        <button className={styles.button} onClick={decrease}>−</button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.button} onClick={increase}>+</button>
      </div>

      <button className={styles.addToCart} onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
