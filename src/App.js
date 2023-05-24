import './reset.css';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import StartPage from './components/Start-page/StartPage';
import Convertor from './components/Convertor/Convertor';
import Footer from './components/Footer/Footer';

function App() {
 
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header/>
        <Routes>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/*" />
          <Route path="/*" />
          <Route path='/convertor' element={<Convertor/>}></Route>
          <Route path='/*'></Route>

        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
