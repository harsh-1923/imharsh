import axios from "axios";
const API = "http://localhost:8000/api/v1/chat-assistant";
// const API = "https://imharsh-server.vercel.app/api/v1/chat-assistant";

export default {
  initChat: async () => {
    const response = await axios.post(`${API}/init`);
    return response.data;
  },
  establishConnection: async (chatID) => {
    console.log(chatID);
    const response = await axios.get(`${API}/establishConnection`, {
      params: chatID,
    });
    return response.data;
  },
  ask: async (details) => {
    console.log(details);
    const response = await axios.post(`${API}/ask`, details);
    // console.log(response.data);
    return response.data;
  },
};
