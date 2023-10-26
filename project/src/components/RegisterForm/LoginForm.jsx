import React, { useState } from "react";
import './RegisterForm.css'
import { Link } from "react-router-dom";

function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleFormSubmit = () => {
    };

    return (
        <>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div className="allForm">
                        <div className="container">
                            <h1>Вход</h1>
                            <label><b>Имя пользователя</b></label>
                            <input
                                onChange={handleName}
                                value={name}
                                type="text"
                                placeholder="Введите имя"
                                name="username or email"
                                id="username"
                                required
                                className="inputF"
                            />

                            <label><b>Пароль</b></label>
                            <input
                                onChange={handlePassword}
                                value={password}
                                type="password"
                                placeholder="Введите пароль"
                                name="pwd"
                                id="pwd"
                                required
                                className="inputF"
                            />

                            <button type="submit" className="buttonF" onClick={handleFormSubmit}><Link to={"/"}>Войти</Link></button>
                        </div>

                        <div>
                            <p>Нет аккаунта? <a href="/Reg">Зарегистрироваться</a>.</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;