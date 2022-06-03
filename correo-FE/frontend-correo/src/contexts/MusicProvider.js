import React, { createContext } from 'react';
    
// create Music Context
const MusicContext = createContext({children});
// create Music Provider
export const MusicProvider = () => {
  const value = {};
  return(
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  )
};