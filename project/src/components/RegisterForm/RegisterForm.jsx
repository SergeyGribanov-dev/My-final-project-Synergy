import React, { useEffect, useState } from "react";
import './RegisterForm.css'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickName, setNickName] = useState('')
    const [data, setData] = useState([]);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleNickName = (e) => {
        setNickName(e.target.value);
    }

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

    const handleFormSubmit = () => {
        const newData = {
            name: name,
            nickName: nickName,
            email: email,
            password: password,
        }
        setData([...data, newData]);
    };


    return (
        <>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div className="allForm">
                        <div className="container">
                            <h1>Регистрация</h1>
                            <p>Пожалуйста, заполните форму ниже.</p>
                            <label><b>Имя пользователя</b></label>
                            <input
                                onChange={handleName}
                                value={name}
                                type="text"
                                placeholder="Введите имя"
                                name="username"
                                id="username"
                                required
                                className="inputF"
                            />

                            <label><b>Игровой nickname</b></label>
                            <input
                                onChange={handleNickName}
                                value={nickName}
                                type="text"
                                placeholder="Введите nickname"
                                name="Nickname"
                                id="Nickname"
                                required
                                className="inputF"
                            />

                            <label><b>Электронная почта</b></label>
                            <input
                                onChange={handleEmail}
                                value={email}
                                type="email"
                                placeholder="Введите почту"
                                name="email"
                                id="email"
                                required
                                className="inputF"
                            />

                            <label><b>Пароль</b></label>
                            <input
                                onChange={handlePassword}
                                value={password}
                                type="password"
                                placeholder="Создайте пароль"
                                name="pwd"
                                id="pwd"
                                required
                                className="inputF"
                            />

                            <button type="submit" className="buttonF">Зарегистрироваться</button>
                        </div>

                        <div>
                            <p>Уже есть аккаунт? <a href="Login">Войти</a>.</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Register;