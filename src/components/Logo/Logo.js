import LogoImg from '../img/logo.png'

function Logo() {
    return (
        <div className="menu__component menu__logo">
            <img src={LogoImg} alt='logo' className="logo" />
            <h2>Чіп Чендж</h2>
        </div>
    )
}
export default Logo