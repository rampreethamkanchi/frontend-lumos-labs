import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
    const [data, setData] = useState(0);

    function getQuote() {
        fetch("https://api.quotable.io/random")
            .then((response) => response.json())
            .then((quote) => {
                setData(quote.content);
            });
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>{data}</h3>
                <button onClick={getQuote}>Get Quote</button>
            </header>
        </div>
    );
}

export default App;
