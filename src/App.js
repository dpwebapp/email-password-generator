import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Email } from './pages/Email';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Password } from './pages/Password';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/password' element={<Password />} />
        <Route exact path='/email' element={<Email />} />
        <Route exact path='/*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
