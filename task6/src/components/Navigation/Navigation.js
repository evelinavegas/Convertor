import { Link } from "react-router-dom"

function Navigation() {
    const navigation = [
        { id: 1, title: 'Послуги', link: '/' },
        { id: 2, title: 'Конвертер валют', link: '/convertor' },
        { id: 3, title: 'Контакти', link: '/' },
        { id: 4, title: 'Задати питання', link: '/' },
      ]
    return (
        <ul>
            {
                navigation.map(nav => (
                    <li key={nav.id} className="nav__component f-weight-400">
                        <Link to={nav.link}>{nav.title}</Link>
                    </li>
                ))
            }
        </ul>
    )
}
export default Navigation