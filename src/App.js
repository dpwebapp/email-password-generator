import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Email } from './pages/Email';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Password } from './pages/Password';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/email-password-generator/' element={<Home />} />
        <Route exact path='/email-password-generator/password' element={<Password />} />
        <Route exact path='/email-password-generator/email' element={<Email />} />
        <Route exact path='/email-password-generator/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
