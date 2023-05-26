import LogIn from '../img/log-in.svg'
import InfoImg from '../img/info-img.png'
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../../burger.css'

function Header() {
    const [styleBtn, setStyleBtn]= useState('menu-btn ')
    const [styleMenu, setStyleMenu]= useState('header-navigation')
    const [menuClick, setManuClick] = useState(false)


    function clickMenu(){
        if(!menuClick){
            setStyleBtn('menu-btn menu-btn-active');
            setStyleMenu('header-navigation block')
            setManuClick(true)
        } else{
            setStyleBtn('menu-btn ');
            setStyleMenu('header-navigation')
            setManuClick(false)
        }
      };
    return(
        <div className="header__wrap">
            <div className='header__menu'>
                <Logo/>
                <a href="#" className={styleBtn} onClick={clickMenu}>
                    <span className="menu-btn-burger"></span>
                </a>
                <div className={styleMenu}>
                    <Navigation/>
                </div>
                <div className='menu__component header__log-in'>
                    <img src={LogIn} alt='login' className="log-in" />
                    <a href='#' className="f-weight-400">Особистий кабінет</a>
                </div>
            </div>
            <div className="header__info page grid">
                <div className="col_1-2 info-container">
                    <h1>Чіп Чендж</h1>
                    <p>Обмінник валют - навчальний</p>
                    <button className="button info-btn"><Link to='/convertor'>Конвертер валют</Link></button>
                </div>
                <div className="col_1-2">
                    <img src={InfoImg} alt='page img' className="grid-img"/>
                </div>
            </div>

        </div>
    )
}
export default Header