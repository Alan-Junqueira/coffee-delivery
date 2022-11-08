import { ActionTypes } from './actions'
import { produce } from 'immer'
import { ICartIten } from '../../contexts/CartTypes'

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

    default:
      return state
  }
}
