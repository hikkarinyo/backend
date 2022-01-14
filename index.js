import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;

const app = express();
const DB_URL = 'mongodb+srv://user:user@cluster0.fhxsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api',router);


async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER STARTED ON 5000!!!'));
    } catch (e) {
        console.log(e)
    }
}

startApp();
