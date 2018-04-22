const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    professorId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    branch: {
        type: String
    },
    year: {
        type: Number
    },
    semester: {
        type: Number
    },
    academicyear: {
        type: String
    },
    message: {
        type: String
    },
    Task: {
        type: String
    },
    file: {
        type: file
    },
    course: {
        type: String
    }
}, {
        timestamps: true
    },
    {
        useForEach: true,
        collection: 'assignments'
    });

module.exports = mongoose.model('assignment', assignmentSchema, 'assignments');