import React from "react";
import '../elements/Chat.css'
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
        <div>
            <div>
                <ol className="ol">
                    <li className="li"><Link to={'/'}>Главная</Link></li>
                    <li className="li"><Link to={'/Second'}>Участники клана</Link></li>
                    <li className="li"><Link to={'/Thirt'}>Чат</Link></li>
                    <li className="li1"><Link to={'/Reg'}>Авторизация</Link></li>
                </ol>
            </div>
        </div>
    )
}