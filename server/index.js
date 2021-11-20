const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SurveyModel = require("./models/Surveys");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://khethelogp:Rockstar101@cluster0.vecxq.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/results", async(req, res) => {
    await SurveyModel.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else {
            res.json(result);
        }
    });
});

//from create survey from frontend
app.post("/survey", async (req, res) => {
    const survey = req.body;
    const newSurvey = new SurveyModel(survey);
    await newSurvey.save();

    res.json(survey);
})

app.listen(port || 5000, () => {
    console.log(`server runnig on port ${port}`);
});