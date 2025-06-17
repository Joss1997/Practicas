import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

const products = [
  { name: 'Producto 1', price: 100 },
  { name: 'Producto 2', price: 200 },
  { name: 'Producto 3', price: 300 },
];

function ProductList({ onAddToCart }) {
  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
