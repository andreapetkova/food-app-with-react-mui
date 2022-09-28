import { useReducer } from 'react';

import { CartCtx } from './cart-context';

const defaultCartState = {
  items: [],
  totalAmout: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedAmount = state.totalAmout + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingItem = state.items[existingItemIndex];

    let updatedCartItems;

    if (existingItem) {
      const updateExistingItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updateExistingItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items(existingItemIndex);

    const updatedAmount = state.totalAmout - existingItem.price;

    let updatedCartItems;

    if (existingItem.amount === 1) {
      updatedCartItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updateExistingItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedCartItems = [...state.items];
      updatedCartItems[existingItemIndex] = updateExistingItem;
    }

    return {
      items: updatedCartItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

export const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return <CartCtx.Provider value={cartContext}>{props.children}</CartCtx.Provider>;
};
