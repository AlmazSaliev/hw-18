
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HomePage } from './component/HomePage'
import { BoxPage } from './component/BoxPage'

function App(){


  return (
    <div className="App">
            <div className='cont-header'>
                <div className='header'>
                   
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5B7_9dVvIgHtc5ItXjeLCxi_QmAGHVo_Iw&usqp=CAU' alt='/'/>
                    <div className='links'>
                        <a href='/'>Главная</a>
                        <a href='/box' >Корзина</a>
                    </div>
                    
                </div>
                
            </div>
      
      
      <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/box" element={<BoxPage/>}/>
            </Routes>
      </Router>
    </div>
  )
}
export default App