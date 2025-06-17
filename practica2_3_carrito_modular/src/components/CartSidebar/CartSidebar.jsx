import styles from './CartSidebar.module.css';

function CartSidebar({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePaymentClick = () => {
    alert('Próximamente aprenderemos a proceder con el pago querido Cecyto');
  };

  return (
    <div className={styles.sidebar}>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <div className={styles.total}>
        <hr />
        <p><strong>Total: ${total}</strong></p>
      </div>
      <button onClick={handlePaymentClick} className={styles.payButton}>Pagar</button>
    </div>
  );
}

export default CartSidebar;
