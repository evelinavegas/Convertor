import PageImg from '../img/start-page-img.jpg'

function StartPage() {
    return (
        <div className="grid start__page">
            <div className="col_1-2 page-left">
                <h2>Конвертер валют</h2>
                <p className='f-weight-400'>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
                <button className="button page-button">Конвертувати валюту</button>
            </div>
            <div className="col_1-2 page-right">
                <img src={PageImg} alt='page-img' className='grid-img'/>
            </div>
        </div>
    )
}

export default StartPage