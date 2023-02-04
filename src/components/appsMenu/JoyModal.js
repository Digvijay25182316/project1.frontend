import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  ModalDialog,
  Stack,
} from "@mui/joy";
import { TextField } from "@mui/material";
import { closeModal, closeAnotherOne } from "../../features/modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteDevotee } from "../../features/devotee/devoteeSlice";
import { useNavigate } from "react-router-dom";
import {
  deleteUser,
  getOneUser,
  updateUser,
} from "../../features/Users/UserSlice";

export const JoyModal = ({ id, isOpen = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { devotee } = useSelector((state) => state.devotees);
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={isOpen}
        onClose={() => dispatch(closeModal())}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            background: "white",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "white",
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            style={{
              marginBottom: "40px",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
            mb={1}
          >
            <span style={{ color: "red" }}>Confirmation actions</span>
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton
              style={{
                background: "skyblue",
                width: "70px",
              }}
              onClick={() => {
                dispatch(closeModal());
                localStorage.setItem("devotee", devotee);
                navigate(`/devotee/${id}`);
              }}
            >
              Edit
            </IconButton>
            {user && user.role === "admin" && (
              <IconButton
                style={{
                  background: "red",
                  width: "70px",
                }}
                onClick={() => {
                  dispatch(deleteDevotee(id));
                  dispatch(closeModal());
                }}
              >
                Delete
              </IconButton>
            )}
          </div>
        </Sheet>
      </Modal>
    </>
  );
};

export const AnotherModal = ({ itm, isVisible = false }) => {
  const [role, setRole] = React.useState("");
  const userDetails = {
    role: {
      role,
    },
    itm,
  };
  const dispatch = useDispatch();
  const SubmitHandler = (event) => {
    event.preventDefault();
    dispatch(getOneUser(itm));
    dispatch(closeAnotherOne());
    dispatch(updateUser(userDetails));
  };
  return (
    <>
      <Modal open={isVisible} onClose={() => dispatch(closeAnotherOne())}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ maxWidth: 500 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              id="basic-modal-dialog-description"
              textColor="text.tertiary"
              style={{
                color: "red",
                textAlign: "center",
                fontWeight: "bolder",
              }}
            >
              !!Warning Do you really wanna delete
            </Typography>

            <button
              style={{
                color: "red",
                backgroundColor: "skyblue",
                outline: "none",
                border: "0.5px solid gray",
                borderRadius: "10px",
                padding: "3px 10px",
                display: "flex",
                fontWeight: "bold",
                fontSize: "2vmax",
                marginTop: "3vmax",
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(deleteUser(itm));
                dispatch(closeAnotherOne());
              }}
            >
              Yes
            </button>
          </div>
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            style={{ textAlign: "center", marginTop: 20 }}
          >
            You Are Allowed to change role
          </Typography>

          <form onSubmit={SubmitHandler}>
            <Stack spacing={2}>
              <FormControl>
                <FormLabel
                  style={{
                    color: "blue",
                    textAlign: "center",
                    fontWeight: "bolder",
                    margin: "4px 10px",
                  }}
                >
                  ROLE
                </FormLabel>
                <TextField
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  size="small"
                >
                  Role
                </TextField>
              </FormControl>
              <Button type="submit" style={{ backgroundColor: "ButtonShadow" }}>
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
};
