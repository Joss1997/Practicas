import styles from './Main.module.css';
import ProductCard from '../ProductCard/ProductCard';
import producto1 from '../../assets/producto1.jpg';
import producto2 from '../../assets/producto2.jpg';
import producto3 from '../../assets/producto3.jpg';

const Main = () => (
  <main className={styles.main}>
    <ProductCard image={producto1} title="Producto 1" price="19.99" />
    <ProductCard image={producto2} title="Producto 2" price="24.99" />
    <ProductCard image={producto3} title="Producto 3" price="15.00" />
  </main>
);

export default Main;
