const mongoose = require('mongoose');
const Schema = new Schema();



const courseSchema = new Schema({
    coursename: {
        type: String
    }
})

const professorSchema = new Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    course: [courseSchema],
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    contact: {
        type: String
    },
    name: {
        type: String,
        index: true,
        trim: true
    },
     
    firstName: {
        type: String,
        index: true,
        trim: true
    },
    lastName: {
        type: String,
        index: true,
        trim: true
    },
    profession: {
        type: Number
    }
},
    {
        timestamps: true
    },
    {
        useForEach: true,
        collection: 'professors'
    });

module.exports = mongoose.model('professor', professorSchema, 'professors')