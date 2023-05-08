import Logo from "../Logo/Logo"
import Phone from '../img/phone.png'
import Phone2 from '../img/phone2.png'
import Navigation from "../Navigation/Navigation"

function Footer({arr}) {
    return(
        <footer className="grid grid1-4">
            <div className="col_1-4">
                <Logo/>
                <p className="f-weight-400">04128, м.Київ, вул. Хрещатик, 19
                    Ліцензія НБУ №156
                    Ⓒ ПАТ ЧіпЧендж, 2019-2023</p>
            </div>
            <div className="col_1-4">
                <Navigation/>
            </div>
            <div className="col_1-4">
                <div>
                    <img src={Phone} alt='phone' className="footer-icon"></img>
                    <a href="#">3773</a>
                </div>
                <p className="f-weight-400">Цілодобова підтримка</p>
            </div>
            <div className="col_1-4">
                <div>
                    <img src={Phone2} alt='phone2' className="footer-icon"></img>
                    <a href="#">8 800 111 22 33</a>
                </div>
                <p>Безкожтовно для дзвінків в межах України</p>
            </div>
        </footer>
    )
}
export default Footer