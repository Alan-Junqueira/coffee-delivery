import { Routes, Route } from 'react-router-dom';

import { Checkout } from './pages/Checkout';
import { CheckoutFilled } from './pages/CheckoutFilled';
import { CheckoutSuccess } from './pages/CheckoutSuccess';
import { Home } from './pages/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/chekcout-filled" element={<CheckoutFilled />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};
