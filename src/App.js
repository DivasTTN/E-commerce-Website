
import { Route, Switch } from 'react-router';
import './App.css';
import Payment from './components/E-commerceCart/PaymentOptions/Payment';
import PaymentPage from './components/E-commerceCart/PaymentOptions/PaymentPage';
import PlaceOrder from './components/E-commerceCart/PlaceOrderholder/Placeholder';
import Shipping from './components/E-commerceCart/ShippingDetails/Shipping';
import CartPage from './components/E-commerceCart/Shoppingcart/CartHomePage';
import ShoppingTop from './components/E-commerceCart/Shoppingcart/ShoppingTop';
import Product from './components/Product-description/product';
import Reviews from './components/Product-description/Review';
import Footer from './components/E-commerceHomePage/Footer/footer';
import Navbar from './components/E-commerceHomePage/Header/navbar';
import NavbarPart from './components/E-commerceHomePage/Header/navbar-2';

import Home from './components/E-commerceHomePage/Home';
import Main from './components/E-commerceHomePage/Main/main';
import CartProvider from './components/Action-Store/cartProvider';


function App() {
  return (
    // <Navbar></Navbar>
    <CartProvider>
      <Switch>
    <Route path="/" exact>
    <Home />
    </Route>
    <Route path="/products" exact>
      <NavbarPart />
    <Main/>
    <Footer />
    </Route>
    <Route path="/product/:id" exact>
      <NavbarPart />
      <Product />
      <Reviews />
      <Footer />
    </Route>
    <Route path="/cart" exact>
      <ShoppingTop />
      <CartPage />
      <Footer />
    </Route>
    <Route path="/ship" exact>
      <Shipping />
    </Route>
    <Route path="/payment" exact>
      <PaymentPage />
    </Route>
    <Route path="/confirmation" exact>
      <PlaceOrder />
    </Route>
    </Switch>
    </CartProvider>
  );
}

export default App;
