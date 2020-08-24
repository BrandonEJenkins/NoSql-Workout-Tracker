const router = require('express').Router();
const WorkoutTracker = require('../models/workoutPlan');
const Workout = require('../models/workoutPlan');

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts)
    })
    .catch(err => {
        res.json(err)
    })
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate
    (
        params.id,
        { $push: { exercises: body } }
    )
})