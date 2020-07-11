const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workouts.findOne({})
        .sort({ date: -1 })
        .then(recentWorkout => {
            res.json(recentWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body }, res) => {
    Workouts.updateOne(body)
});

router.post("/api/workouts", ({ body }, res) => {
    Workouts.create(body, (error, saved) => {
        if (error) {
            console.log(error);
        } else {
            res.send(saved);
        }
    });

    router.put("/api/workouts/:id", (req, res) => {
        workouts.updateOne(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $push: {
                    exercises: req.body
                }
            },

            (error, added) => {
                if (error) {
                    console.log(error);
                }
            });
    });

    module.exports = router;