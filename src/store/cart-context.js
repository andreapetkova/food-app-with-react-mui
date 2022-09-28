import React from 'react';

export const CartCtx = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
  clearCart: () => {},
});
