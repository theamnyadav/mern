const express = require('express')

const mongoose = require('mongoose')

const app = express()
const workoutRoutes = require('./routes/workouts')
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',workoutRoutes)

mongoose.connect('mongodb+srv://theamnyadav:aman123@mernapp.3pcxmv4.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(4000, () => {
      console.log("Listening on port 4000");
    });
})
.catch((error)=>{
    console.log(error)
})



