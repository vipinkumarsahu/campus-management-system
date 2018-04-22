const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseName = new Schema({
    coursename: {
        type: String,
        require: true
    },
    courseid: {
        type: String,
        require: true
    }
});

const subjectSchema = new Schema({
    semester: {
        type: Number,
        require: true
    },
    branchname: {
        type: String,
        require: true
    },
    course: [courseName]
}, {
        useForEach: true,
        collection: 'subjects'
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('subject', subjectSchema, 'subjects')