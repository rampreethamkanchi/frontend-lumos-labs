import "./App.css";
import React, { useState } from "react";

function App() {
    const [quoteState, setQuote]=useState("Click below to get Quote ");
    const [authorState, setAuthor]=useState("");
    async function clickHandler(){
        let someResult = await fetch("https://api.quotable.io/random");
        // console.log('jsonResult:', jsonResult)
        let res = await someResult.json();
        let quote = res.content;
        let author = res.author;
        // console.log(quote);
        setQuote(quote);
        setAuthor(author);
    }
   
    return (
        <div className="App">
            <h1 id="header">This is where you get your daily quotes</h1>
            <p id="quote" className="content"><b>QUOTE</b> : {quoteState}</p>
            <p id="author" className="content"><b>AUTHOR</b> : <i>{authorState}</i></p>
            <button onClick={clickHandler} id="button">Click Me</button>
        </div>
    );
}

export default App;
