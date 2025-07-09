import React from "react";

const Count = ({ counter }) => {
  return (
    <div>
      <p>
        The number of advices we have seen:{" "}
        <span style={{ fontFamily: "fantasy" }}> {counter}</span>
      </p>
    </div>
  );
};

export default Count;
