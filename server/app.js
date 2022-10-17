const express = require('express')
const cors = require('cors')
const db = require('./db')
const { ObjectId } = require('mongodb')
const app = express()
app.use(express.json())
app.use(cors())

db.connectDB()

app.get('/courses', async(req, res)=>{
    const result = await db.getCourse()
    res.json(result)
});
app.get('/courses/:course_id', async(req, res)=>{
    try{
        const courseid = ObjectId(req.params.course_id)
    const result = await db.getCourseById(courseid)
    res.json(result)
    }catch(err){
        res.send(err.message)
    }
   
});
app.post('/courses', async(req, res)=>{
    const course = req.body;
    course._id = ObjectId()
    const result = await db.addCourse(course)
    res.json(result)
});

app.post('/courses/:course_id/reviews', async(req, res)=>{
    const review = req.body;
    const course_id = ObjectId(req.params.course_id)
    review._id = ObjectId()
    review.courseId = course_id
    
    const result = await db.addReviewById(review)
    res.json(result)
})

app.listen(3000, ()=>console.log('listerning on port 3000'))