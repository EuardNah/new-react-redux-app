import React from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator,decrementCreator, incrementCreator} from "./store/countReduser";
import { fetchUsers } from "./store/userReduser";



const  App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)
    console.log(count)
    console.log(users)




    return (
        <div className="App">
            <div style={{fontSize:"3rem", alignItems:"center"}} >Баланс: {count}</div>
            <div className="btn-new" >
                <button className="btn" onClick={()=> dispatch(asyncIncrementCreator())} >Инкриметт ++</button>
                <button className="btn" onClick={()=> dispatch(asyncDecrementCreator())} >Декримент --</button>
                <button className="btn" onClick={()=> dispatch(fetchUsers())} >Получить юзеров</button>
            </div>
            <div >
                {users.map(user =>
                    <div style={{fontSize:"2rem",cursor:"pointer", border:'1px solid black', padding:"10px", marginTop:5}}>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default App;