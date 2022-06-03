import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    
    // contexts
    import { MusicProvider } from './contexts/MusicContext';
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <MusicProvider>
          <App />
        </MusicProvider>
      </React.StrictMode>
    );