import Cors from "cors";
import initMiddleware from "@lib/init-middleware";
import axios from "axios";
import type { NextApiHandler } from "next";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

const handler: NextApiHandler = async (req, res) => {
  // Run cors
  await cors(req, res);
  await axios({
    method: "POST",
    url: "http://31.169.69.116:5001/api/Account/Login",
    data: { userName: "admin", password: "password" },
    headers: { "Access-Control-Allow-Origin": "*" },
  })
    .then((data) => {
      return res.json({ res: data.data });
    })
    .catch((error) => console.log(error));
  await axios({
    method: "POST",
    url: "https://31.169.69.116:5001/api/Account/Login",
    data: { userName: "admin", password: "password" },
    headers: { "Access-Control-Allow-Origin": "*" },
  })
    .then((data) => {
      return res.json({ res: data.data });
    })
    .catch((error) => console.log(error));
};

export default handler;
