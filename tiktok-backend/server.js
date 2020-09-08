import express from "express";
import mongoose from "mongoose";

import Data from './data.js';
import Videos from "./dbModel";


// app config
const app = express();
const port = 9000;

//middleware


//DB config
const connection_url = 'mongodb+srv://admin:fKq5icjZLrivPZmE@cluster0.awnqw.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//api endpoints

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get ("/v1/posts", (req, res) => res.status(200).send(Data));

//POST request to add data to the databse
//will let us add a video document to the vidoes collection
app.post("/v2/posts", (req, res) => {

    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));