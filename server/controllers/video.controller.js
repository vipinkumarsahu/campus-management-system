const Video = require('../models/videos');

module.exports.getVideo = function (req, res) {
    Video.find({})
        .exec(function (err, videoData) {
            if (err) {
                res.send(err);
            } else {
                res.json(videoData);
            }
        });
}

module.exports.insertVideo = function (req, res) {
    let videoData = {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    }
    let data = new Video(videoData);
    data.save(function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
}

module.exports.updateVideo = function (req, res) {
    let data = {
        title: req.body.title,
        description: req.body.description,
        url: req.body.url
    }
    Video.findByIdAndUpdate(req.params.id, data, { new: true }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
}
module.exports.deleteVideo = function (req, res) {
    Video.findByIdAndRemove(req.params.id)
        .exec(function (err, data) {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        })
}