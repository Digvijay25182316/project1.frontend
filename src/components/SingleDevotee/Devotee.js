import React, { useEffect, useState } from "react";
import "./Devotee.css";
import { Avatar, Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/spinner";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  getDevoteesDetails,
  updateDevoteeDetails,
} from "../../features/devotee/devoteeSlice";

const Devotee = () => {
  const dispatch = useDispatch();
  const [isCLicked, setIsClicked] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDevoteesDetails(id));
  }, [dispatch, id]);
  const { devotee, isError, message } = useSelector((state) => state.devotees);

  const [roundsChanting, setRoundsChanting] = useState(Number);
  const [description, setDescription] = useState("");

  const Details = {
    roundsChanting,
    description,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const details = {
      Details,
      id,
    };
    dispatch(updateDevoteeDetails(details));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [message, isError, dispatch]);

  if (!devotee) {
    return <Spinner />;
  } else {
    if (isCLicked) {
      return (
        <>
          <div className="container_DevoteeDetails">
            <div className="Main_Details">
              <Button
                style={{
                  background: "skyblue",
                  padding: "2px 20px",
                  marginTop: "10px",
                  fontSize: "20px",
                  fontFamily: "Exo, sans-serif",
                  fontWeight: "bolder",
                  border: "0.5px solid darkcyan",
                  borderRadius: 10,
                }}
                className="Editbtn"
                onClick={() => setIsClicked(false)}
              >
                View
              </Button>

              <span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                  className="AvtarDiv"
                >
                  <Avatar
                    className="Avatar"
                    style={{
                      backgroundColor: "orange",
                      height: "10vmax",
                      width: "10vmax",
                      margin: "5px auto",
                    }}
                  />
                  <div className="Details_name">NAME: {devotee.name}</div>
                </div>
                <div>
                  <form onSubmit={onSubmit}>
                    <span>
                      <span className="title">
                        Chanting Rounds & role / mentor
                      </span>
                      <br />
                      <span>
                        <span className="title">Rounds : </span>
                        <Input
                          size="small"
                          value={roundsChanting}
                          onChange={(e) => setRoundsChanting(e.target.value)}
                          type="number"
                        />
                      </span>
                      <span
                        style={{ display: "flex", flexDirection: "column" }}
                        className="text_Fields"
                      >
                        <span>
                          <span className="title">Role : </span>
                          {devotee.role}
                        </span>{" "}
                        {devotee.role === "Shishya" && (
                          <span>
                            <span className="title">Mentor: </span>
                          </span>
                        )}
                      </span>
                    </span>
                    <div className="text_Fields" style={{ marginTop: 10 }}>
                      <span className="title">Contact Info</span>
                      <br />
                      <div>{devotee.email}</div>
                      <div>
                        <span className="title">Whatsapp : </span>
                        {devotee.whatsappNo}
                      </div>
                    </div>
                    <div className="LocalDetails text_Fields">
                      <span
                        className="createdDate"
                        style={{ textAlign: "center", marginRight: 20 }}
                      >
                        <span className="title">
                          Date Of Registeration: <br />
                        </span>
                        {devotee.createdAt}
                      </span>
                      <div>
                        <span className="title">Locals:</span>
                        <br />
                        <span style={{ marginRight: 20 }}>
                          <span className="title">City: </span>
                          {devotee.city}
                        </span>
                        <span>
                          <span className="title">Country: </span>
                          {devotee.country}
                        </span>
                      </div>
                      <div>
                        <span style={{ marginLeft: "23px" }}>
                          <span className="title">Language : </span>
                          {devotee.language}
                        </span>
                      </div>
                    </div>
                    <div className="text_Fields" style={{ marginTop: "23px" }}>
                      <span className="title">Description : </span>
                      <Input
                        style={{
                          border: "none",
                          outline: "none",
                        }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <Button
                      style={{
                        fontWeight: 800,
                        left: "70%",
                        background: "rgba(0, 0, 0,0.23)",
                        margin: "5px",
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </span>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="container_DevoteeDetails">
            <div className="Main_Details">
              <Button
                style={{
                  background: "skyblue",
                  padding: "2px 20px",
                  marginTop: "10px",
                  fontSize: "20px",
                  fontFamily: "Exo, sans-serif",
                  fontWeight: "bolder",
                  border: "0.5px solid darkcyan",
                  borderRadius: 10,
                }}
                onClick={() => setIsClicked(true)}
                className="Editbtn"
              >
                EDIT
              </Button>
              <span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                  className="AvtarDiv"
                >
                  <Avatar
                    className="Avatar"
                    style={{
                      backgroundColor: "orange",
                      height: "10vmax",
                      width: "10vmax",
                      margin: "5px auto",
                    }}
                  />
                  <div className="Details_name">NAME: {devotee.name}</div>
                </div>
                <div>
                  <span>
                    <span className="title">
                      Chanting Rounds & role / mentor
                    </span>
                    <br />
                    <span>
                      <span className="title">Rounds : </span>
                      {devotee.roundsChanting}
                    </span>
                    <span
                      style={{ display: "flex", flexDirection: "column" }}
                      className="text_Fields"
                    >
                      <span>
                        <span className="title">Role : </span>
                        {devotee.role}
                      </span>{" "}
                      {devotee.role === "Shishya" && (
                        <span>
                          <span className="title">Mentor: </span>
                          {devotee.mentor}
                        </span>
                      )}
                    </span>
                  </span>
                  <div className="text_Fields" style={{ marginTop: 10 }}>
                    <span className="title">Contact Info</span>
                    <br />
                    <div>{devotee.email}</div>
                    <div>
                      <span className="title">Whatsapp : </span>
                      {devotee.whatsappNo}
                    </div>
                  </div>
                  <div className="LocalDetails text_Fields">
                    <span
                      className="createdDate"
                      style={{ textAlign: "center" }}
                    >
                      <span className="title">
                        Date Of Registeration: <br />
                      </span>
                      {new Date(devotee.createdAt).toLocaleDateString("en-UK")}
                    </span>
                    <div style={{ display: "flex" }}>
                      <span className="title">Locals:</span>
                      <br />
                      <div style={{ dipsplay: "flex" }}>
                        <div style={{ marginRight: 20 }}>
                          <span className="title">City: </span>
                          <br />
                          {devotee.city}
                        </div>
                        <div>
                          <span className="title">Country: </span>
                          <br />
                          {devotee.country}
                        </div>
                      </div>
                    </div>
                    <div>
                      <span style={{ marginLeft: "23px" }}>
                        <span className="title">Language : </span>
                        {devotee.language}
                      </span>
                    </div>
                  </div>
                  <div className="text_Fields" style={{ marginTop: "23px" }}>
                    <span className="title">Description : </span>
                    {devotee.description}
                  </div>
                </div>
              </span>
            </div>
          </div>
        </>
      );
    }
  }
};

export default Devotee;
