import axios from "axios";
import { URL, TOKEN } from "../config";

axios.defaults.baseURL = URL;

export const getRides = async () => {
  const result = await axios.get(`/v1/rides?token=${TOKEN}&api_key=${TOKEN}`);
  return result.data;
};

export const postTickets = async (data) => {
  try {
    const result =  await axios.post(`/v1/tickets`, {
      pin: data.pin,
      ride_id: data.ride_id,
      token: TOKEN,
    });
    return result.data

  } catch (error) {
    return {
      error: error.response.data
    }
  }
};
