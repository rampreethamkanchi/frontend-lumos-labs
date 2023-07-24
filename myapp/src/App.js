import "./App.css";
import React,{ useEffect, useState } from "react";
import axios from "axios";

function App() {
    // const [a, seta] = React.useState();
    const [quote, setQuote] = React.useState();
    const [quoteString, setQuoteString] = React.useState();
    const [quoteAuthor, setQuoteAuthor] = React.useState();
    const [submit, setSubmit] = React.useState();
    // const [quoteState, setQuote]=useState("Click below to get Quote ");
    // const [authorState, setAuthor]=useState("..Author of the quote..");
    // async function clickHandler(){
    //     // let someResult = await fetch("https://api.quotable.io/random");
    //     axios.get("http://localhost:5000/quote").then((res)=>{
    //         setQuote(res.data[0].quote);
    //         setAuthor(res.data[0].author);
    //     })
    //     .catch((err)=>{
    //         console.error(err);
    //     })
    // function getLengthOfDatabase(){
    //     axios.get("http://localhost:5000/quote").then((res)=>{
    //        return res.data.length;
    //     })
    //     .catch((err)=>{
    //         console.error(err);
    //         return 0;
    //     })
    // }
    

    

    React.useEffect(() => {
        axios.get("http://localhost:5000/quote").then((res)=>{
            // setQuote(res.data[0].quote);
            // setAuthor(res.data[0].author);
            setQuote(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }, [submit]);
    async function handleClick(){
        try{
        const res = await axios.post("http://localhost:5000/quote",{ "author": quoteAuthor, "quote" : quoteString });
        setSubmit(res);
        }
        catch{
            console.log("some error occured ramu");
        }

    }
    return (
        <div className="App">
            <h1 id="header">These are quotes from my MongoDB database</h1>
            <p id="quote" className="content">{quote && quote.map((item)=>(
               <div>{item.quote} <i>by</i> <b>{item.author}</b></div> 
            ))}</p>
            <div id="quoteMargin" className="margin">
            <label htmlFor="forQuote" id="quoteLabel">Write your own quote : </label>
            <input type="text" id="forQuote" onChange={(e)=>{setQuoteString(e.target.value)}} />
            </div>
            <div id="authorMargin" className="margin">
            <label htmlFor="forAuthor" id="authorLabel">Write your name : </label>
            <input type="text" id="forAuthor" onChange={(e)=>{setQuoteAuthor(e.target.value)}} />
            </div>
            <button id="button" onClick={handleClick}>Click to enter your quote to our Database</button>
        </div>
    );
}


export default App;
