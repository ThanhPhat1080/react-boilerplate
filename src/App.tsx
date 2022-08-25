// Assets
import { ICONS } from '@assets';

// Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Zoo } from '@Pages';

// Enums
import {ROUTERS} from '@enums'

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src={ICONS.VITE_ICON} className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={ICONS.REACT_ICON} className='logo react' alt='React logo' />
          </a>

          <a href='https://www.typescriptlang.org/' target='_blank' rel='noreferrer'>
            <img src={ICONS.TS_ICON} className='logo ts' alt='TS logo' />
          </a>
        </div>
        <Routes>
          <Route path={ROUTERS.ROOT}>
            <Route index element={<HomePage />} />
            <Route path={ROUTERS.ZOO} element={<Zoo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
