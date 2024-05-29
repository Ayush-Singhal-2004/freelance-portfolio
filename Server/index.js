import express from "express"
import "dotenv/config"
import cors from "cors"

import sendEmail from "./utils/sendMail.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.post('/user/contact', async(req, res) => {
    const data = req.body;
    const {status, message} = await sendEmail(data)
    res.status(status).send({ "status": status, "message": message });
})

app.listen(PORT || 8001, () => {
    console.log(`Server is running on PORT ${PORT}`);
})