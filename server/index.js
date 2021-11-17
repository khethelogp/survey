const express = require("express");
const app = express();
const mongoose = require("mongoose");
const SurveyModel = require("./models/Surveys");
const cors = require("cors");
require("dotenv").config();

let port = process.env.PORT;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.get("/results", (req, res) => {
    SurveyModel.find({}, (err, result) => {
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

app.listen(port, () => {
    console.log(`server runnig on port ${port}`);
});