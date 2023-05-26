import './reset.css';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import StartPage from './components/Start-page/StartPage';
import Convertor from './components/Convertor/Convertor';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import Qestions from './components/Qestions/Qestions';

function App() {
 
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path='/convertor' element={<Convertor/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/qestions' element={<Qestions/>}></Route>

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
