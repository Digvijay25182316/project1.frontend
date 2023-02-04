import React from "react";
import { Wave } from "react-animated-text";

const NotAdmin = () => {
  return (
    <>
      <div className="NotFound_Container">
        <div className="NotFound_Main">
          <lable className="NotFound_Contents NotFound_Error">Error</lable>
          <div className="animated_Text NotFound_Contents">
            <Wave text="YOU AREN'T ADMIN" effect="fadeOut" effectChange={1.0} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotAdmin;
