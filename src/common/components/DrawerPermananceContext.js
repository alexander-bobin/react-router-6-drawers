import React, { createContext, useState, useEffect } from 'react';

export const DrawerPermanenceContext = createContext();

export const DrawerPermanenceProvider = ({ children }) => {
  const [areDrawersTemporary, setAreDrawersTemporary] = useState(localStorage.getItem('areDrawersTemporary') || '0');

  return (
    <DrawerPermanenceContext.Provider value={{ areDrawersTemporary: areDrawersTemporary === '1' ? true : false, setAreDrawersTemporary }}>
      {children}
    </DrawerPermanenceContext.Provider>
  );
};
