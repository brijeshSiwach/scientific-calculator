import React, { useState } from "react";
import Panel from './Panel.js';
import './Panel.css';

function Display(){

    const [text, setText] = useState("");

    const buttonClickHandler = (symbol) => {
        if(symbol == 'C') {
            setText("");
        }
        else {
            setText((prevText) => prevText + symbol);
        }
    };
    
    const handlChange = (e) => {
        setText(e.target.value);
    }

    return(
        <>
            <input type="text" placeholder="type your expression" value = {text} onChange={handlChange} className="calculator-display" />
            <Panel clickHandler = {buttonClickHandler}/>
        </>
    )
}

export default Display;