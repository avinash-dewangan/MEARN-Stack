import axios from "axios";
import https from "https";
  
const agent = new https.Agent({
    rejectUnauthorized: false,
  });

const axiosAPI = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // /httpsAgent: agent,
    timeout: 100000,
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
    }
  });

export default axiosAPI 

// axios.get(url, { httpsAgent: agent });
//   res.status(200).json({
//     message: result.data,
//   });