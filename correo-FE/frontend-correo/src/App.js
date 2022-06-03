import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import Interface from './components/Interface';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Interface/>
    </div>
  );
}

export default App;