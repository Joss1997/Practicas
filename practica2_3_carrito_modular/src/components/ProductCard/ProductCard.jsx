import styles from './ProductCard.module.css';

function ProductCard({ name, price, onAddToCart }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => onAddToCart({ name, price })}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
