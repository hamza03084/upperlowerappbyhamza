import React, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  // let temp = document.getElementById("exampleInputEmail1");
  const [first, setfirst] = useState("");
  const [myApi, setMyApi] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  const getDataByCity = () => {
    setIsLoading(true);
    // setTimeout(
    //   fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?q=${first}&appid=0a2a7a91fac0e4f74092186bdceb8b2b&units=metric`
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMyApi(json);
    //       setIsLoading(false);
    //     }),
    //   1000
    // );

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${first}&appid=0a2a7a91fac0e4f74092186bdceb8b2b&units=metric`
      )
      .then((res) => {
        setMyApi(res.data);
        setIsLoading(false);
        setErr("");
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err.response.data.message);
      });
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=0a2a7a91fac0e4f74092186bdceb8b2b&units=metric`
        );
        const result = await res.json();
        // console.log(result);
        setMyApi(result);
        setIsLoading(false);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // console.log(myApi);

  return (
    <div className="container">
      {/* <form> */}
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">
          Weather update
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setfirst(e.target.value)}
        />
      </div>
      {err && <h2 style={{ color: "red" }}>{err}</h2>}
      <button onClick={getDataByCity} type="submit" className="btn btn-primary">
        Submit
      </button>
      {/* </form> */}
      <h1>
        {isLoading ? "Loading..." : myApi?.name} :{" "}
        {isLoading ? "Loading..." : myApi?.main?.temp}
      </h1>
    </div>
  );
}

export default Weather;
