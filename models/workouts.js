const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

// const exerciseSchema = new Schema({
//     type: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number
// })

// exercises: { type: Array, "default": [] }

const workoutSchema = new Schema({
    day: Date,
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number
        }
    ]
}, opts);

workoutSchema.virtual("totalDuration").get(function () {
    return { $sum: "$exercises.duration" };
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;



// {
//     day: new Date(new Date().setDate(new Date().getDate() - 7)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       },
//       {
//         type: "resistance",
//         name: "Bench Press",
//         duration: 20,
//         weight: 285,
//         reps: 10,
//         sets: 4
//       }
//     ]
// }