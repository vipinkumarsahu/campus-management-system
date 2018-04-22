const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classcodeSchema = new Schema({
    semester: {
        type: Number,
        required:true
    },
    branch: {
        type: String,
        required:true
    },
    course: {
        type: String,
        required:true
    },
    professor: {
        type: String,
        required:true
    }
},
{
    timestamps: true
},
{
    useForEach: true,
    collection: 'classcodes'
})

module.exports = mongoose.model('classcode',classcodeSchema,'classcodes');