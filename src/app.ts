import express from "express";
import router from "./routes/userRoute";
import bodyParser from "body-parser";

const app = express()
const PORT = 3000

app.use(express.json());
app.use(bodyParser.json());

app.use("/users", router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})