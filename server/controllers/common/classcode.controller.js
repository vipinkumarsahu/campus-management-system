const classcodeService = require('../../service/common/classcode.service');

module.exports.getClass = function (req, res) {
    classcodeService.getClass()
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.addClass = function (req, res) {
    let data = {
        semester: req.body.semester,
        branch: req.body.branch,
        course: req.body.course,
        professor: req.body.professor
    }
    classcodeService.addClass(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.updateClass = function (req, res) {
    classcodeService.updateClass(req.params.id)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.updateClassData = function (req, res) {
    let data = {
        id: req.params.id,
        semester: req.body.semester,
        branch: req.body.branch,
        course: req.body.course,
        professor: req.body.professor
    }
    classcodeService.updateClassData(data)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}

module.exports.deleteClass = function (req, res) {
    classcodeService.deleteClass(req.params.id)
        .then((data) => {
            res.send(data);
        }).catch((error) => {
            res.send(error);
        })
}