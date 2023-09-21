import { useState } from 'react'
import  ConvertorVector  from '../img/ConvertorVector.svg'
import  SavedVector  from '../img/saved-vector.svg'
import { v4 as uuidv4 } from 'uuid';

function Convertor() {
    const [valueGive, setValueGive] = useState('')
    const [valueGet, setValueGet] = useState('')
    const [optionGive, setOptionGive] = useState('UAH')
    const [optionGet, setOptionGet] = useState('UAH')
    const [story, setStory] = useState([])

    function dateToString(days){
        let dateToday = new Date();
        dateToday.setDate(dateToday.getDate() + days);
        let month = dateToday.getMonth() + 1;
        let day = dateToday.getDate();
        let year = dateToday.getFullYear();
        if(month < 10) {
            month = '0' + month.toString();}
        if(day < 10) {
            day = '0' + day.toString();}
        const dateReturn = year + '-' + month + '-' + day;
        return dateReturn;
    }

    const minDate = dateToString(-7);
    const maxDate = dateToString(0);
    const [selectData, setSelectData] = useState(maxDate)

    const currency = [
        {id:1, value: 'UAH'},
        {id:2, value: 'USD'},
        {id:3, value: 'EUR'},
        {id:4, value: 'GBR'},
        {id:5, value: 'CNY'},
    ];

    const exchangeRate = {
        UAH: {'EUR':0.024,'UAH':1,'USD':0.027,'GBR':0.02,'CNY':0.25},
        USD: {'EUR':0.90,'UAH':36.96,'USD':1,'GBR':0.79,'CNY':9.37},
        EUR: {'EUR':1,'UAH':40.99,'USD':1.11,'GBR':0.86,'CNY':10.27},
        GBR: {'EUR':1.07,'UAH':44.7,'USD':1.11,'GBR':1,'CNY':11.2},
        CNY: {'EUR':0.07,'UAH':3,'USD':0.08,'GBR':0.06,'CNY':1},
    }
    
    function creatConvert( setVal1, value1, set1, targetVal, option1,){  
        setVal1(targetVal)
        convertCurrent(value1, set1, targetVal, option1)
    }
    function creatCount( set1,  e){
        set1(e)
    }
  
    function convert (set1, e, set2,  option1, option2) {
        const targetValue = e.target.value
        creatCount(set1, targetValue)
        const result = (targetValue * (exchangeRate[option1][option2])).toFixed(2)
        set2(result)
    }
    function convertCurrent( value1, set1, option1, option2) {
        const result = (value1 * (exchangeRate[option1][option2])).toFixed(2)
        set1(result)
    }
    function getData(){
        const data = document.querySelector('#calendar').value
        setSelectData(data)
    } 
    function getStory(){
        const valueStory = {}
        valueStory.id = uuidv4(); 
        valueStory.data = selectData 
        valueStory.sumBefore = valueGive 
        valueStory.currBefore = optionGive
        valueStory.sumAftere = valueGet
        valueStory.currAftere = optionGet
        setStory([valueStory, ...story.slice(0, 9)])
    }
    function clear(){
        setStory([])
    }
    return(
        <main>
            <div className="main-container convertor-form convertor">
                <div className="form-container">
                    <h2>Конвертер валют</h2>

                    <div className='form-wrap'>
                        <div className="col_1-2 form">
                            <div className="form-component">
                                <label htmlFor="have">В мене є:</label>
                                <input type="number" value={valueGive}  onChange={(e) => convert(setValueGive, e, setValueGet,   optionGive, optionGet)}  className="form-element form-input" name="have" placeholder='1000' />
                            </div>
                            <div>
                                <select name="currency" className="form-element form-currency" onChange={(evt) => creatConvert(setOptionGive, valueGive, setValueGet, evt.target.value, optionGet)}>
                                    {
                                        currency.map(curr => (
                                            <option key={curr.id}  value={curr.value}>{curr.value}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <img src={ConvertorVector} alt='' className='convertor-vector'/>
                        <div className="col_1-2 form content-right">
                            <div className="form-component">
                                <label htmlFor="need">Хочу придбати:</label>
                                <input type="number" name="need" value={valueGet} onChange={(e) => convert(setValueGet, e, setValueGive,  optionGet, optionGive)} className="form-element form-input" placeholder='1000' />
                            </div>
                            <div>
                                <select name="currency" className="form-currency form-element" onChange={(evt) => creatConvert(setOptionGet, valueGive, setValueGet, evt.target.value, optionGive)}>
                                    {
                                        currency.map(curr => (
                                            <option key={curr.id} value={curr.value} >{curr.value}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className=" form-wrap">
                        <div className="col_1-2">
                            <input className="form-element form-input form-data " id='calendar' defaultValue={maxDate} onChange={ getData } type="date" min={minDate} max={maxDate}/>
                        </div>
                        <div className="col_1-2 content-right">
                            <button className="button page-button " onClick={getStory}>Зберегти результат</button>
                        </div>
                    </div>
                </div>
               
            </div>
            
            <div className="main-container convertor">

                <div className="saved-container">
                    <div className="saved-grid">
                        <div className="col_1-2">
                            <h2>Історія конвертації</h2>
                        </div>
                        <div className="col_1-2 content-right">
                            <button className="button page-button" onClick={clear}>Очистити історію</button>
                        </div>
                    </div>
                    <div className="saved-content">
                        {
                            story.map(count =>(
                                <div key={count.id} className="saved-count ">
                                    <p>{count.data}</p>
                                    <span>{count.sumBefore} {count.currBefore}</span>
                                    <img src={SavedVector} alt=""></img>
                                    <span>{count.sumAftere} {count.currAftere}</span>
                                </div>
                            ))
                            
                        }
                    </div>
                    
                </div>
                
            </div>
        </main>
    )
}
export default Convertor
