import LogIn from '../img/log-in.svg'
import InfoImg from '../img/info-img.png'
import Logo from "../Logo/Logo"
import Navigation from "../Navigation/Navigation"


function Header() {
    
    return(
        <div className="header__wrap">
            <div className='header__menu'>
                <Logo/>
                <div className='menu__component menu__navigation'>
                    <Navigation/>
                </div>
                <div className='menu__component header__log-in'>
                    <img src={LogIn} alt='login' className="log-in" />
                    <a href='#' className="f-weight-400">Особистий кабінет</a>
                </div>
            </div>
            <div className="header__info grid">
                <div className="col_1-2 info-container">
                    <h1>Чіп Чендж</h1>
                    <p>Обмінник валют - навчальний</p>
                    <button className="button info-btn">Конвертер валют</button>
                </div>
                <div className="col_1-2">
                    <img src={InfoImg} alt='page img' className="grid-img"/>
                </div>
            </div>

        </div>
    )
}
export default Header