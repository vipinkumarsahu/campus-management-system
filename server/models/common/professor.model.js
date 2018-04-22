const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const professorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    contact: {
        type: String
    },
    education: {
        type: String
    },
    university: {
        type: String
    },
    intrest: {
        type: String
    }
},
    {
        timestamps: true
    },
    {
        useForEach: true,
        collection: 'professors'
    })

module.exports = mongoose.model('professor', professorSchema, 'professors')