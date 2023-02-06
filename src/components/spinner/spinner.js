import React from "react";
import { SpinnerCircular } from "spinners-react";
const Spinner = () => {
  return (
    <>
      <div
        className="spinner"
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SpinnerCircular
          size={90}
          thickness={179}
          speed={100}
          color="rgba(57, 172, 166, 1)"
        />
      </div>
    </>
  );
};

export default Spinner;
