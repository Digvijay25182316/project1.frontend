import React from "react";
import "./Home.css";
import { Wave } from "react-animated-text";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="home_main">
        <div className="blank"></div>

        {user ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h1 style={{ color: "gray", textAlign: "center" }}>
                CURRENT USER:
              </h1>
              <div className="animated_Text">
                <Wave text={user.name} effect="fadeOut" effectChange={1.0} />
              </div>
            </div>
          </>
        ) : (
          <div className="animated_Text">
            <Wave text="LOGIN TO ACCESS" effect="fadeOut" effectChange={1.0} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
