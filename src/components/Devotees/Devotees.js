import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getDevotees, reset } from "../../features/devotee/devoteeSlice";
import "./Devotees.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../spinner/spinner";
import { openModal } from "../../features/modal/modal";
import { Link } from "react-router-dom";

const Devotees = () => {
  const dispatch = useDispatch();
  const { devotees, isError, message, isLoading } = useSelector(
    (state) => state.devotees
  );

  const [columnDefs] = useState([
    { field: "id", hide: true },
    { field: "INDEX" },
    { field: "NAME" },
    { field: "EMAIL" },
    { field: "WHATSAPP NO" },
    { field: "AGE" },
    { field: "ROUNDS CHANTING" },
    { field: "ROLE" },
    { field: "MENTOR" },
  ]);
  const rowDefs = [];
  devotees &&
    devotees.map((i, j) =>
      rowDefs.push({
        id: `${i._id}`,
        INDEX: `${j + 1}`,
        NAME: `${i.name}`,
        EMAIL: `${i.email}`,
        "WHATSAPP NO": `${i.whatsappNo}`,
        AGE: `${i.age}`,
        "ROUNDS CHANTING": `${i.roundsChanting}`,
        ROLE: `${i.role}`,
        MENTOR: `${i.mentor}`,
      })
    );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getDevotees());
    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch, message]);

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <>
      <div className="main_DevoteeTable">
        <div className="dataGrid_Container">
          <Link to={"/devotees/register"} style={{ textDecoration: "none" }}>
            <button className="UserAddBTN">+ADD DEVOTEES</button>
          </Link>
          <Box sx={{ height: "100%", width: "100%", background: "white" }}>
            <DataGrid
              rows={rowDefs}
              columns={columnDefs}
              onSelectionModelChange={(id) => dispatch(openModal({ id }))}
              sx={{
                boxShadow: 2,
                border: "none",
                cursor: "pointer",
                fontFamily: "Exo, sans-serif",
                color: "black",
                fontWeight: "bolder",
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Devotees;
