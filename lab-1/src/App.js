import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList/>
    </div>
  );
}

export default App;
