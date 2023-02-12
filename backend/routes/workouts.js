//correct the following code

const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel')


router.get('/',(req,res)=>{
    res.json({mssg:'get all lol'})
})

router.get('/:id',(req,res)=>{
    res.json({ mssg: "get all" });
})
router.post('/',async(req,res)=>{
const {title,load,reps} = req.body

    try {
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)

    } catch (error){
        res.status(400).json({error:error.message})
    }

})
module.exports = router