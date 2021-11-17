const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    surveyDate: {
        type: Date,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    favoriteFood:{
        type: Array,
        required: true,
    },
    eatOut:{
        type: Number,
        required: true,
    },
    movies:{
        type: Number,
        required: true,
    },
    television:{
        type: Number,
        required: true,
    },
    listenToRadio:{
        type: Number,
        required: true,
    },
});

const SurveyModel = mongoose.model("surveys",SurveySchema);
module.exports = SurveyModel;