import React, { Fragment, useEffect, useState } from "react";
import "./Registeration.css";
import { MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createDevotee } from "../../features/devotee/devoteeSlice";

const Registeration = () => {
  const { devotees, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.devotees
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [age, setAge] = useState(Number);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [roundsChanting, setRoundsChanting] = useState(Number);
  const [role, setRole] = useState("");
  const [mentor, setMentor] = useState("");
  const [language, setLanguage] = useState("");
  const [gender, setGender] = useState("");

  const devoteeData = {
    name,
    email,
    whatsappNo,
    age,
    roundsChanting,
    country,
    city,
    role,
    mentor,
    language,
    gender,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDevotee(devoteeData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
    }
  }, [message, dispatch, isLoading, isError, isSuccess, devotees]);

  const roleOptions = [{ name: "Shishya" }, { name: "Mentor" }];

  return (
    <Fragment>
      <div className="main_Container">
        <div className="form_Container_R">
          <form onSubmit={handleSubmit}>
            <div className="form_contents">
              <label className="lable">NAME:</label>
              <TextField
                value={name}
                type="text"
                label="name"
                onChange={(e) => setName(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">EMAIL:</label>
              <TextField
                value={email}
                type="email"
                label="email"
                onChange={(e) => setEmail(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">WHATSAPP NO.:</label>
              <TextField
                value={whatsappNo}
                type="text"
                label="whatsapp No"
                onChange={(e) => setWhatsappNo(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">AGE:</label>
              <TextField
                value={age}
                type="number"
                label="age"
                onChange={(e) => setAge(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">ROUNDS CHANTING:</label>
              <TextField
                value={roundsChanting}
                type="number"
                label="Chanting Rounds"
                onChange={(e) => setRoundsChanting(e.target.value)}
                size={"small"}
                style={{ width: "17vmax" }}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">Country:</label>
              <TextField
                value={country}
                type="text"
                label="country"
                onChange={(e) => setCountry(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">City:</label>
              <TextField
                value={city}
                type="city"
                label="city"
                onChange={(e) => setCity(e.target.value)}
                size={"small"}
              />
            </div>

            <hr className="HR" />

            <div className="form_contents">
              <label className="lable">ROLE:</label>
              <TextField
                value={role}
                select
                type="text"
                label="Role"
                onChange={(e) => setRole(e.target.value)}
                size={"small"}
                style={{ width: "17vmax" }}
              >
                {roleOptions.map((option, i) => (
                  <MenuItem key={i} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {role === "Shishya" && (
              <>
                <hr className="HR" />
                <div className="form_contents">
                  <label className="lable">MENTOR:</label>
                  <TextField
                    value={mentor}
                    type="text"
                    label="Mentorname"
                    onChange={(e) => setMentor(e.target.value)}
                    size={"small"}
                  />
                </div>
              </>
            )}
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">LANGUAGE</label>
              <TextField
                value={language}
                type="text"
                label="Language"
                onChange={(e) => setLanguage(e.target.value)}
                size={"small"}
              />
            </div>
            <hr className="HR" />
            <div className="form_contents">
              <label className="lable">Gender</label>
              <TextField
                value={gender}
                type="text"
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
                size={"small"}
              />
            </div>

            <hr className="HR" />

            <div className="form_contents input_btn">
              <button type="submit" className="register_btn">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Registeration;
