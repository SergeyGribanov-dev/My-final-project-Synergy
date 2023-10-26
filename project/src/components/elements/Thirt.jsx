import React from "react";
import Chat from "./Chat.js";
import './Chat.css'

function Thirt() {
    return (
        <>
            <main className="allChat">
                <h1 className="h1">Чат</h1>
                <div className="chat">
                    <React.Fragment>
                        <Chat />
                    </React.Fragment>
                </div>
            </main>
        </>
    )
}
export default Thirt;