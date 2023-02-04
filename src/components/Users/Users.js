import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../Devotees/Devotees.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../spinner/spinner";
import { openAnotherOne } from "../../features/modal/modal";
import { Link } from "react-router-dom";
import { getAllUsers, reset } from "../../features/Users/UserSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  const [columnDefs] = useState([
    { field: "id", hide: true },
    { field: "INDEX" },
    { field: "NAME" },
    { field: "EMAIL" },
    { field: "ROLE" },
  ]);
  const rowsDefs = [];
  users &&
    users.map((i, j) =>
      rowsDefs.push({
        id: `${i._id}`,
        INDEX: `${j + 1}`,
        NAME: `${i.name}`,
        EMAIL: `${i.email}`,
        ROLE: `${i.role}`,
      })
    );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getAllUsers());
    return () => {
      dispatch(reset());
    };
  }, [isError, dispatch, message]);
  if (isLoading === true) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="main_DevoteeTable" style={{ height: "70vh" }}>
          <div className="dataGrid_Container" style={{ height: "50vmax" }}>
            <Link to={"/user/register"} style={{ textDecoration: "none" }}>
              <button className="UserAddBTN">+ADD USER</button>
            </Link>
            <Box
              sx={{
                height: "100%",
                width: "100%",
                background: "white",
              }}
            >
              <DataGrid
                columns={columnDefs}
                rows={rowsDefs}
                onSelectionModelChange={(itm) => {
                  dispatch(openAnotherOne({ itm }));
                }}
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
  }
};

export default Users;
