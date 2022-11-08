import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { string } from 'zod';
import { CartAction, ICartIten } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

interface ICartContextProvider {
  children: ReactNode;
}

type PaymentMethods = 'creditCard' | 'money' | 'debitCard';

interface IcreateNewCartItem {
  id: number;
  banner: string;
  price: number;
  subtitle: string;
  tags: string[];
  title: string;
}

interface ICartContext {
  cartItens: ICartIten[];
  addItenToCart: (data: IcreateNewCartItem) => void;
  removeItenFromCart: (id: string) => void;
  addPaymentMethod: (id: string, paymentMethod: PaymentMethods) => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartContextProvider = ({ children }: ICartContextProvider) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartItens: []
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-coffee:cart-state:1.0.0'
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  console.log(cartState);

  const { cartItens } = cartState;

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee:cart-state:1.0.0',
      JSON.stringify(cartState)
    );
  }, [cartState]);

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee:cart-state:1.0.0',
      JSON.stringify(cartState)
    );
  }, [cartState]);

  const addPaymentMethod = (id: string, paymentMethod: PaymentMethods) => {
    dispatch(CartAction.addPaymentMethod(id, paymentMethod));
  };

  return (
    <CartContext.Provider
      value={{ cartItens, addPaymentMethod }}
    >
      {children}
    </CartContext.Provider>
  );
};
