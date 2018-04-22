const subjectModel = require('../../models/common/course.model');
const subjectService = require('../../service/common/curriculum.service');

module.exports.getSubjects = function (req, res) {
    subjectService.getSubjects()
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.createSementer = function (req, res) {
    let data = {
        semester: req.body.semester,
        branchname: req.body.branchname
    }
    subjectService.createSementer(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.addCourse = function (req, res) {
    let data = {
        semid: req.params.id,
        coursename: req.body.coursename,
        courseid: req.body.courseid
    }
    console.log(JSON.stringify(data, null, 3));
    subjectService.addCourse(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.updateCourse = function (req, res) {
    let data = {
        type: req.params.type,
        semid: req.params.semid,
        subjectid: req.params.subjectid
    }
    if (data.type === '1') {
        data.coursename = req.body.coursename,
            data.courseid = req.body.courseid
    }

    subjectService.updateCourse(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.deleteCourse = function (req, res) {
    let data ={
        semid : req.params.semid,
        subjectid : req.params.subjectid
    } 
    subjectService.deleteCourse(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })

}

//delete branch

module.exports.deleteBranch = function(req, res){
    subjectService.deleteBranch(req.params.semid)
    .then((data)=>{
        res.send(data);
    }).catch((error)=>{
        res.send(error);
    })
}