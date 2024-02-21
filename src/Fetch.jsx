import React, { useEffect } from "react";

function Fetch() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/POST";

  useEffect(() => {
    // fetch
    fetch(apiUrl)
      .then((res) => {
        // parse as json
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
    //
    // // axios needs install/import
    // axios.get(apiUrl).then(() => {
    //   // doesn't need to be parsed as json
    //   console.log(res.data);
    // });
    //
    // // XMLHttpRequest (XHR) (native in browser)
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", apiUrl);
    // // parse as json
    // xhr.responseType = "json";
    // xhr.send();
    // xhr.onload = () => {
    //   console.log(xhr.response);
    // };
    //
    // jQuery needs install/import
    // const $ = jQuery;
    // $.get(apiUrl, data => {
    //   console.log(data);
    // })
    //
    // // navigator.sendBeacon() (native in browser)
    // navigator.sendBeacon(
    //   apiUrl2,
    //   JSON.stringify({
    //     timeOnPage: 25,
    //   })
    // );
  }, []);

  return <></>;
}

export default Fetch;
