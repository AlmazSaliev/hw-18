import { useContext, useEffect, useState } from "react"
import { Global } from "./Global"
import './BoxPage.css'

export const BoxPage = () => {
    let data = useContext(Global)

    let b = data.get()

    let [newarr, setnewarr] = useState(b)

    let [newdata, setdata] = useState(newarr)

    useEffect(() => {
        
        localStorage.setItem('data', JSON.stringify(newarr))

        setdata(() => {
            let getdata = JSON.parse(localStorage.getItem('data'))
            return getdata
        }
        )

    }, [newarr])

    const removeUser = (id) => {
        let deletedArr = [...b]
        let answer = deletedArr.filter((item) => item.id !== id)
        setnewarr(answer);
    }

    return (
        <div className='cont'>

            <div className='cont2'>

                {newdata.map((i) => {
                    return (
                        <div className='box' key={i.id}>
                            <div className="box1">
                                <img src={i.url} alt='/' />
                                <h3>Имя: {i.name}</h3>
                            </div>
                            <div className="box2">
                                <p>Возраст: {i.age} лет</p>
                                <p>Работал: {i.company}</p>
                                <p className='text1'>{i.text}</p>
                            </div>
                            <div className="box3">
                                <p>Оклад: {i.price} $</p>
                                <p>Нанять на: {i.num} месяца</p>
                                <button className="btn" onClick={() => removeUser(i.id) }>Удалить</button>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}