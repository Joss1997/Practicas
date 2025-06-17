import styles from './ProductCard.module.css';

const ProductCard = ({ image, title, price }) => (
  <div className={styles.card}>
    <img src={image} alt={title} className={styles.image} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.price}>${price}</p>
  </div>
);

export default ProductCard;
