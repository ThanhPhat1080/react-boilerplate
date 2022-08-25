import reactLogo from './assets/react.svg';
import tsLogo from './assets/ts.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, Zoo } from '@Pages';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>

          <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
            <img src={tsLogo} className='logo ts' alt='TS logo' />
          </a>
        </div>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='zoo' element={<Zoo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
