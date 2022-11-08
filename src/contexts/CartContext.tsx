import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { CartAction } from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';
import { ICartIten, IcreateNewCartItem } from './CartTypes';

interface ICartContextProvider {
  children: ReactNode;
}

interface ICartContext {
  cartItens: ICartIten[];
  addItenToCart: (id: number, amountQuantity: string) => void;
  removeItenFromCart: (id: string) => void;
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

      return { cartItens: [] };
    }
  );

  const { cartItens } = cartState;

  // console.log(cartItens);

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee:cart-state:1.0.0',
      JSON.stringify(cartState)
    );
  }, [cartState]);

  const addItenToCart = (id: number, amountQuantity: string) => {
    dispatch(CartAction.addCartIten(id, amountQuantity));
  };

  const removeItenFromCart = (id: string) => {
    dispatch(CartAction.removeCartIten(id));
  };

  return (
    <CartContext.Provider
      value={{ removeItenFromCart, addItenToCart, cartItens }}
    >
      {children}
    </CartContext.Provider>
  );
};
