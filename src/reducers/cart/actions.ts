export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_PAYMENTY_METHOD_MONEY = 'ADD_PAYMENTY_METHOD_MONEY',
  ADD_PAYMENTY_METHOD_DEBIT_CARD = 'ADD_PAYMENTY_METHOD_DEBIT_CARD',
  ADD_PAYMENTY_METHOD_CREDIT_CARD = 'ADD_PAYMENTY_METHOD_CREDIT_CARD',
}

export const CartAction = {
  addCartIten(id: number, amountQuantity: string) {
    return {
      type: ActionTypes.ADD_ITEM_TO_CART,
      payload: {
        newCartIten: {
          id, amountQuantity
        }
      },
    }
  },
  removeCartIten(id: string) {
    return {
      type: ActionTypes.REMOVE_ITEM_FROM_CART,
      payload: { id },
    }
  }
}
