import React from "react";
import { useState } from "react";
import Count from "./Count";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const apiUrl = "https://api.adviceslip.com/advice";
  async function getAdvice() {
    const respObj = await fetch(apiUrl);
    const jsonVal = await respObj.json();
    // console.log(jsonVal.slip.advice);
    setAdvice(jsonVal.slip.advice);
    // setCount(count + 1);
    setCount((count) => count + 1);
    //* using state to update the advice
  }
  //? count gets messed up and when page loads we get an advice
  // useEffect(function () {
  //   getAdvice();
  // }, []);

  return (
    <div>
      <h1>Hi</h1>
      <button onClick={getAdvice}>Get Advice</button>
      {/* <p>{jsonVal.slip.advice}</p> //* jsonVal is not defined */}
      <p>
        Advice from me :{" "}
        <span style={{ fontFamily: "fantasy" }}> {advice}</span>
      </p>
      <p>
        <Count counter={count} />
      </p>
    </div>
  );
};

export default App;
