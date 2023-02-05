import axios from "axios";

import { API_URL } from "../../App";

const createDevotee = async (devoteeData) => {
  const response = await axios.post(API_URL + "devotee/register", devoteeData, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

const getDevotees = async () => {
  const reponse = await axios.get(API_URL + "devotees", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return reponse.data;
};
const getDevoteesDetails = async (id) => {
  const { data } = await axios.get(API_URL + `devotee/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  return data;
};

const updateDevoteeDetails = async (details) => {
  const { data } = await axios.put(
    API_URL + `devotee/update/${details.id}`,
    details.Details,
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return data;
};

const deleteDevotee = async (id) => {
  const { data } = await axios.delete(API_URL + `devotee/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return data;
};

const devoteeService = {
  createDevotee,
  getDevotees,
  getDevoteesDetails,
  deleteDevotee,
  updateDevoteeDetails,
};

export default devoteeService;
