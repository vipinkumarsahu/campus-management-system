const express = require('express');
const router = express.Router();
const videoController = require('./controllers/video.controller');
 
module.exports = function () {
    //User controller
    router.get('/videos', videoController.getVideo);
    router.post('/insert', videoController.insertVideo);
    router.put('/update/:id', videoController.updateVideo);
    router.delete('/delete/:id', videoController.deleteVideo);
    router.all('/',function(req, res){
        console.log(req.baseUrl);
    })
    return router;
}