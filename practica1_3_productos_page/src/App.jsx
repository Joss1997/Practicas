import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
