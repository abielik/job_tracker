import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Routes />
      </main>
    </BrowserRouter>
  );
}

export default App;
