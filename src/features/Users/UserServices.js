import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/";

const getAllUsers = async () => {
  const reponse = await axios.get(API_URL + "admin/users", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return reponse.data;
};

const getSingleUser = async (id) => {
  const reponse = await axios.get(API_URL + `admin/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return reponse.data;
};

const updateUser = async (userDetails) => {
  const { data } = await axios.put(
    API_URL + `admin/user/${userDetails.itm}`,
    userDetails.role,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return data;
};

const deleteUser = async (itm) => {
  const { data } = await axios.delete(API_URL + `/admin/user/${itm}`, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
  return data;
};
const userServices = {
  getAllUsers,
  updateUser,
  getSingleUser,
  deleteUser,
};

export default userServices;
