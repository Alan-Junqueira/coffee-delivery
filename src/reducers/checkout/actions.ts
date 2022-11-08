export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_PAYMENTY_METHOD_MONEY = 'ADD_PAYMENTY_METHOD_MONEY',
  ADD_PAYMENTY_METHOD_DEBIT_CARD = 'ADD_PAYMENTY_METHOD_DEBIT_CARD',
  ADD_PAYMENTY_METHOD_CREDIT_CARD = 'ADD_PAYMENTY_METHOD_CREDIT_CARD',
}

export interface ICartIten {
  id: number;
  banner: string;
  price: number;
  subtitle: string;
  tags: string[];
  title: string;
}

type PaymentMethods = 'creditCard' | 'money' | 'debitCard';


export const CartAction = {
  addCartIten(newCartIten: ICartIten) {
    return {
      type: ActionTypes.ADD_ITEM_TO_CART,
      payload: { newCartIten },
    }
  },
  removeCartIten(id: string) {
    return {
      type: ActionTypes.REMOVE_ITEM_FROM_CART,
      payload: { id },
    }
  },
  addPaymentMethod(id: string, paymentMethod: string) {
    return {
      type: ActionTypes.ADD_PAYMENTY_METHOD_MONEY,
      payload: { paymentMethod, id },
    }
  }
}
