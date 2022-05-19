
import { useEffect, useReducer, useState } from 'react'
import { Global } from './Global'
import './Products.css'

let data = [
    { id: 1, num: 1, url: 'https://st-0.akipress.org/st_runews//.storage/limon3/images/January2020/.thumbs/66767ea8d9153bb359936e7d5124fd88_600_0_0.jpg', price: '5000', name: 'Тилек Мамутов', age: '35', company: 'Outtalent', text: 'Он родился в Бишкеке, выучился в школе №70. После успешной сдачи вступительных экзаменов по математике и английскому ему выдался шанс поступить на факультет программирования в АУЦА. Тилек первый кыргызстанец, работающий в компании Google. Из компании с зарплатой $200 000 в год он уволился, чтобы создать свой стартап. Сейчас он помогает талантливым специалистам из СНГ начинать карьеру в крупных американских компаниях. Приложение, созданное кыргызским программистом, позволяет устроиться в Google, Amazon, Facebook и др.', },
    { id: 2, num: 1, url: 'https://st-0.akipress.org/st_runews/.storage/limon3/images/January2020/eeec4c9eb2cc885655227b37ef6ae070.jpg', price: '4500', name: 'Талгар Марлис уулу', age: '25', company: 'Amazon', text: 'Родился в Кочкоре в Нарынской области. Еще со школьных времен мечтал попасть в топовые IT-компании, такие как Google, Amazon, Facebook, Microsoft. После окончания вуза он сразу же устроился на работу по профессии в одну из местных компаний Анкары. Там получил огромный опыт и продвинулся к пику карьеры, получив повышение. После многих успешных собеседований он прошел в Microsoft и Amazon. Эти компании находились на территории Европы. Талгар выбрал «Амазон», офис которого располагался в Люксембурге', },
    { id: 3, num: 1, url: 'https://st-0.akipress.org/st_runews/.storage/limon3/images/January2020/9093169f5c19cffa6361ddd674233250.jpg', price: '4590', name: 'Азамат Бекназаров', age: '36', company: 'Google', text: 'Азамат живет в Токио и работает в компании Google, одной из крупнейших IT-корпораций. Он родом из Нарынской области, с детства отличается трудолюбием и усердием. До Google работал в другой большой японской IT-корпорации Rakuten как web-developer. После трех лет работы там кыргызстанец решил поменять профессиональное направление и перешел в Google', },
    { id: 4, num: 1, url: 'https://st-0.akipress.org/st_runews/.storage/limon3/images/January2020/069df97412ca21b414d13d12e22117b9.jpg', price: '3000', name: 'Нурзат Рахманбердиева', age: '28', company: 'SAP SE', text: 'Начала свой путь к успеху со школьной скамьи и сейчас работает в крупной немецкой фирме в Берлине. Нурзат родилась в городе Баткен, в семье инженера и бухгалтера. Брала пример с брата, который работает в крупной компании IQVIA в Европе. Именно он предложил поступить ей на программиста. Нурзат окончила вуз с отличием, продолжила обучение в Саарландском университете в Германии, после девушка решила строить карьеру в области искусственного интеллекта и устроилась в отдел инноваций в SAP SE. Она планирует набраться опыта и помочь девочкам Кыргызстана научиться программировать.', },
    { id: 5, num: 1, url: 'https://st-0.akipress.org/st_runews/.storage/limon3/images/January2020/c9a62f41079bfcf9da81d80325f5d9bb.jpg', price: '3500', name: 'Дастан Аттокуров', age: '28', company: 'Стартап в Чикаго', text: 'Родом из города Каракола Иссык-Кульской области. Там же он окончил лицей имени Т.Сатылганова и после поступил в университет КГТУ им. И. Раззакова. Дастан работает программистом в одном из стартапов в Чикаго, который входит в топ-15 успешных компаний США и топ-3 в Чикаго. Годовая оплата составляет шестизначные цифры в долларах. Также стартап номинирован как «Best place to work». Компания дает кредиты малоимущим людям с большими процентами.', },
]



let getLocal = () => JSON.parse(localStorage.getItem('data')) || []
let local = (prev, action) => {
    
    if (action.type === 'LOCAL-GET') {
       let bool = prev.findIndex((elem)=>{
           return elem.id === action.value.id;
       })
       if(bool === -1){
           return [...prev, action.value];
       } else {  
           return prev.map((elem,index)=>{
               if(index === bool){
                
                   return {
                       ...elem,
                       num: elem.num + 1,
                       price: +elem.price + +action.value.price * action.value.num
                }
               } else {
                   return elem;
               }
           })
       }
    }

}

export const Products = () => {
    let [setData, setolddata] = useReducer(local, [], getLocal)
   
    let [oneData] = useState(data);


    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(setData))
    }, [setData])

    let[displey, setdispley]=useState(false)
 
    function message(){
        
        setdispley(true) 
       
        setTimeout(()=>{
           setdispley(false) 
        },2000)
    }
    // console.log(color);
    return (
        <div className='box-top'>
           
            <div className='box-product'>
            <Global.Provider value={{ get: getLocal,}} />
                {oneData.map((i, imdex) => (
                    <div key={imdex} className='product-box' onClick={() => {
                        setolddata({ type: 'LOCAL-GET', value: i })
                        message()
                        }}>
                             
                        <img src={i.url} alt='/' />
                        <p className='price'>{i.price} $</p>
                        <h3>Имя: {i.name}</h3>
                        <p>Возраст: {i.age} лет</p>
                        <p>Работал: {i.company}</p>
                        <p className='text'>{i.text}</p>
                    </div>
                ))}
                
            </div>
            {displey && <p className='message'> + 1 </p>}
            
        </div>

    )
}