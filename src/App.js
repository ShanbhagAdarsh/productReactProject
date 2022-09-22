import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
            <Header />
            <div className='container mh-650'>

              <ProductList />

            </div>

            <Footer />
        </>
  );
}

export default App;
