import React, { useState } from "react";
import "./App.css";

// const rando = Math.floor(Math.random() * answers.length);

const rando = (array) => {
    const randoIndex = Math.floor(Math.random() * array.length);
    return array[randoIndex];
}

const EightBall = (props) => {
    const [msg, setMsg] = useState("Think of a Question.");
    const [color, setColor] = useState("purple");

    const clickMe = () => {
        const { msg, color } = rando(props.answers)
        setMsg(msg);
        setColor(color);
    }
    return (
        <button className="EightBall" style={{background: color}} onClick={clickMe}> {msg} </button> 
    )

}
   EightBall.defaultProps = {
     answers:[
        { msg: "It is certain.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};


export default EightBall;
