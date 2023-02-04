import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { GrAppsRounded } from "react-icons/gr";
import "./appsMenu.css";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { RiLoginCircleFill } from "react-icons/ri";
import { ImUser } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "rgba(0,0,0,0.5)",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export const AppsMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <span
          className="apps_logo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <GrAppsRounded
            style={{ color: "red", fontSize: 40 }}
            className="GrApps"
          />
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="top_apps ">
              <div className="apps_Container partOf_apps">
                <div className="apps_Components">
                  <Link
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={handleClose}
                  >
                    <div className="Home">
                      <TiHome style={{ color: "red", fontSize: 50 }} />
                    </div>
                    <span className="lable_apps">Home</span>
                  </Link>
                </div>

                <div className="apps_Components">
                  <Link
                    to={"/user/login"}
                    style={{
                      textDecoration: "none",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={handleClose}
                  >
                    <div className="login">
                      <RiLoginCircleFill
                        style={{ color: "blue", fontSize: 50 }}
                      />
                    </div>
                    <span className="lable_apps">Login</span>
                  </Link>
                </div>
              </div>
              <div className="bottom_apps partOf_apps">
                <div className="apps_Components">
                  <Link
                    to={"/users"}
                    style={{
                      textDecoration: "none",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={handleClose}
                  >
                    <div className="user">
                      <ImUser style={{ color: "brown", fontSize: 50 }} />
                    </div>
                    <span className="lable_apps">User</span>
                  </Link>
                </div>
                <div className="apps_Components">
                  <Link
                    to={"/devotees"}
                    style={{
                      textDecoration: "none",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onClick={handleClose}
                  >
                    <div className="Devotees">
                      <HiUserGroup style={{ color: "orange", fontSize: 50 }} />
                    </div>
                    <span className="lable_apps">devotees</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
