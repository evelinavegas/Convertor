import PageImg from '../img/start-page-img.jpg';
import { Link } from "react-router-dom"; 
function StartPage() {
    return (
        
        <div className="grid page start__page">
            <div className="col_1-2 info-container page-left">
                <h2>Конвертер валют</h2>
                <p className='f-weight-400'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
                <button className="button page-button"><Link to='/convertor'>Конвертувати валюту</Link></button>
            </div>
            <div className="col_1-2 page-right">
                <img src={PageImg} alt='page-img' className='grid-img'/>
            </div>
        </div>
    )
}

export default StartPage