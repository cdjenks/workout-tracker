const path = require("path");
const express = require("express");
const fs = require("fs");

module.exports = function (app) {

    // app.use(express.static(__dirname + "../public"));

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}