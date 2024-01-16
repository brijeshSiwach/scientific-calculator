import React from "react";
import Symbol from './Symbol.js';

function Panel(props){
    const panelButtons = [
        "1", "2", "3", "(", "/",
        "4", "5", "6", ")", "|",
        "7", "8", "9", "+", "-",
        "0", "*", "%", "&", "^",
        "=", "C"
    ]

    const panel = panelButtons.map((value, index) => {
        return <Symbol symbol = {value} clickHandler = {props.clickHandler}/>;
    })

    return (
        <div className="panel-container-grid">
            {panel}
        </div>
    )
}

export default Panel;