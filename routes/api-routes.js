const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        // .sort({ date: -1 })
        // .limit(1)
        .then(recentWorkout => {
            res.json(recentWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts", (req, res) => {
    Workouts.create(req.body)
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    Workouts.findByIdAndUpdate(id, { $push: { exercises: req.body } }, { upsert: true })
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find()
        .sort({ date: -1 }).limit(7)
        .then(workoutWeek => {
            res.json(workoutWeek);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

module.exports = router;