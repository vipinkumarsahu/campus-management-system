const mongoose = require('mongoose');
const Schema = new Schema();

const studentSchema = new Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    branch: {
        type: String
    },
    semester: {
        type: Number
    },
    course: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phoneNumber: {
        type: String
    },
    name: {
        type: String,
        index: true,
        trim: true
    },
    picture: {
        type: String,
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
        useForEach: true,
        collection: 'students'
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('student', studentSchema, 'students')