import React, { useRef } from 'react';
import './Chat.css'
function Chat() {
    const chatMessageRef = useRef(null);
    const inputRef = useRef(null);

    function handleFormSubmit(e) {
        e.preventDefault();
        const message = inputRef.current.value;
        inputRef.current.value = '';
        send(message);
    }

    async function send(message) {
        const messageItem = document.createElement('p');
        messageItem.textContent = message;
        messageItem.classList.add('message');

        chatMessageRef.current.appendChild(messageItem);

        setTimeout(() => {
            chatMessageRef.current.removeChild(messageItem)
        }, 180000)
        const url = 'https://open-ai21.p.rapidapi.com/chatmpt';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '15387aefa7msh16e9f30d26e76c3p12372fjsnd1eaefe502bd',
                'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
            },
            body: JSON.stringify({message}) 
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            const messageItemAnswer = document.createElement('p');
            messageItemAnswer.textContent = "ChatGPT: " + result.slice(8, -17);
            messageItemAnswer.classList.add('message')
            chatMessageRef.current.appendChild(messageItemAnswer);
            setTimeout(() => {
                chatMessageRef.current.removeChild(messageItemAnswer)
            }, 180000)
        } catch (error) {
            console.error(error);
        }


    }
    return (
        <>
            <div className='mainChat'>
                <div ref={chatMessageRef} className='messages'></div>
            </div>
            <div className='divinput'>
                <form className='form' onSubmit={handleFormSubmit}>
                    <input ref={inputRef} className='input' type='text' placeholder='Введите сообщение' maxLength={150} />
                    <button className='button' type='submit'>Отправить</button>
                </form>
            </div>
        </>
    )
}
export default Chat;