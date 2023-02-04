import React from "react";
import "./NotFound.css";
import { Wave } from "react-animated-text";

const NotFound = () => {
  return (
    <>
      <div className="NotFound_Container">
        <div className="NotFound_Main">
          <lable className="NotFound_Contents NotFound_Error">
            Error:{""} 404
          </lable>
          <div className="animated_Text NotFound_Contents">
            <Wave text="PAGE NOT FOUND" effect="fadeOut" effectChange={1.0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
