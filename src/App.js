import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Store from './Pages/Store/Store';
import Success from './Pages/Success/Success';
import Cancel from './Pages/Cancel/Cancel';
import CartProvider from './CartContext';

function App () {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
