const express = require('express');
const router = express.Router();
const videoController = require('./controllers/video.controller');
const subjectController = require('./controllers/common/curriculum.controller');
const classcodeController = require('./controllers/common/classcode.controller');

module.exports = function () {
    //video controller
    router.get('/videos', videoController.getVideo);
    router.post('/insert', videoController.insertVideo);
    router.put('/update/:id', videoController.updateVideo);
    router.delete('/delete/:id', videoController.deleteVideo);

    /* //Admin controller
    router.get('/admins', adminController.getAdmin);
    router.post('/admin', adminController.createAdmin);
    router.put('/update/:id', adminController.updateAdmin);
    router.delete('/delete/:id', adminController.deleteAdmin);

    //Student controller
    router.get('/students', studentController.getStudent);
    router.post('/admin', studentController.createStudent);
    router.put('/update/:id', studentController.updateStudent);
    router.delete('/delete/:id', studentController.deleteStudent);

    //Professor controller
    router.get('/professors', professorController.getProfessor);
    router.post('/admin', professorController.createProfessor);
    router.put('/update/:id', professorController.updateProfessor);
    router.delete('/delete/:id', professorController.deleteProfessor);

    //Assignment controller
    router.get('/assignment', assignmentController.getAssignment);
    router.post('/admin', assignmentController.createAssignment);
    router.put('/update/:id', assignmentController.updateAssignment);
    router.delete('/delete/:id', assignmentController.deleteAssignment); */


    //subject controller
    router.get('/subjects', subjectController.getSubjects);
    router.post('/add-smester', subjectController.createSementer);
    router.post('/add-course/:id', subjectController.addCourse);
    //type will be 0/1 for save 1 and for open form it will be 0
    router.put('/update-course/:semid/:subjectid/:type', subjectController.updateCourse);
    router.delete('/delete-course/:semid/:subjectid', subjectController.deleteCourse);
    //remove branch mean remove the semester so all course will delete from that branch.
    router.delete('/delete-branch/:semid', subjectController.deleteBranch)


    //Class Code
    router.get('/classes', classcodeController.getClass)
    router.post('/add-class', classcodeController.addClass);
    router.get('/get-classdata/:id', classcodeController.updateClass);
    router.put('/update-class/:id', classcodeController.updateClassData)
    router.delete('/delete-class/:id', classcodeController.deleteClass);

    router.all('/', function (req, res) {
        console.log(req.baseUrl);
    })
    return router;
}