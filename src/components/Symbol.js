import react from "react";
import './Symbol.css';

function Symbol(props){

    
    return (
        <>
            <input type="button" value = {props.symbol} onClick={() => props.clickHandler(props.symbol)} className="calculator-button" />
        </>
    )
}

export default Symbol;