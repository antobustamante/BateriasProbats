import React from 'react';
import AppRouter from './containers/AppRouter';
import AppContextProvider from './context/cartContext';

export default function App () {
  return (
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  )
}