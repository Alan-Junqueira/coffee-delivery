import { ActionTypes, ICartIten } from './actions'
import { produce } from 'immer'

interface ICartState {
  cartItens: ICartIten[]
}

export function cartReducer(state: ICartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART:
      return produce(state, (draft) => {
        draft.cartItens.push(action.payload.newCartIten)
      })
    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const arrayWithoutRemovedIten = state.cartItens.filter(item => {
        if (item.id !== action.payload.id) return item
      })

      return produce(state, (draft) => {
        draft.cartItens = arrayWithoutRemovedIten
      })
    }
    case ActionTypes.ADD_PAYMENTY_METHOD_MONEY: {
      const cartItenIndex = state.cartItens.findIndex((iten) => {
        return iten.id == action.payload.id - 1
      })
      return produce(state, (draft) => {
        draft.cartItens[cartItenIndex].paymentMethod === action.payload.paymentMethod
      })
    }

    default:
      return state
  }
}
