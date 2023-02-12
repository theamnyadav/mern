const mogoose =  require('mongoose')

const Schema = mogoose.Schema

const workoutSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true 
    }
},{timestamps:true})

module.exports = mogoose.model('Workouts',workoutSchema)
