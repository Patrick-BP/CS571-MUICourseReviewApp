const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017/miucoursesreviews'

const mongo = new MongoClient(url)
let db;
exports.connectDB = async()=>{
  const client =  await mongo.connect()
  console.log('DB connected');
  db = client.db('miucoursesreviews') 
}


exports.getCourse = ()=>{
    try{
        const response = db.collection('couses').find({}).toArray()
        return response
    }catch(err){

    }

}

exports.addCourse = (course)=>{
    try{
        const response = db.collection('couses').insertOne(course)
        return response
    }catch(err){

    }

}

exports.getCourseById = (courseid)=>{
    try{
        const response = db.collection('couses').findOne({_id:courseid})
        return response
    }catch(err){
        return err.message
    }
}

exports.addReviewById = (review)=>{
    try{
        const response = db.collection('reviews').insertOne(review)
        return response
    }catch(err){
        return err.message
    }
}