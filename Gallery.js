import React from "react";
import { useEffect, useState } from "react";

function Gallery() {
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
    let image = "https://jsonplaceholder.typicode.com/photos";
    fetch(image)
      .then((response) => response.json())
      .then((json) => setApiData(json));
  }, []);
  console.log(ApiData);
  //   const images =
  return (
    <div>
      <h1>{ApiData[1]?.albumId}</h1>
      <img src={ApiData[1]?.url} alt="" />
      <h1>{ApiData[1]?.title}</h1>

      {/* {ApiData.map((val) => {
        return (
          <>
            <h1>{val.id}</h1>
            <img src={val.url} />
            <h1>{val.title}</h1>
          </>
        );
      })} */}
    </div>
  );
}

export default Gallery;
