import React, { useState, useEffect } from "react";

export default function Textform(prop) {
  const [ApiData, setApiData] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1/asasa")
      .then((response) => response.json())
      .then((json) => setApiData(json));
  }, []);

  console.log(ApiData);

  let [text, setText] = useState("");
  let upclick = () => {
    console.log("click");
    let newtex = text.toLocaleUpperCase();
    setText(newtex);
  };
  let lowclick = () => {
    console.log("click");
    let newtex = text.toLocaleLowerCase();
    setText(newtex);
  };

  let upchange = (event) => {
    console.log("ok");
    setText(event.target.value);
  };
  let clear = () => {
    setText("");
  };
  let handlecopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div className="container">
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label"></label> */}
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            rows="7"
            onChange={upchange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upclick}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={lowclick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={clear}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          copy
        </button>
      </div>
      <div className="container mt-3">
        <h2>your sumary</h2>
        <p>
          {text.split(" ").length} words ,{text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
