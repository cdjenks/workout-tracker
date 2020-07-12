const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: String,
            name: String,
            distance: Number,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]

}, opts);

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce(function (total, exercise) {
        return total + exercise.duration;
    }, 0);
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;