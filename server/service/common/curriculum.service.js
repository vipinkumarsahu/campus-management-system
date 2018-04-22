const subjectModel = require('../../models/common/course.model');

module.exports.getSubjects = async function (data) {
    try {
        let data = await subjectModel.find();
        return data;
    } catch (error) {
        throw error;
    }
}

module.exports.createSementer = async function (data) {
    try {
        let dataObj = new subjectModel(data);
        let resData = await dataObj.save();
        return resData;
    } catch (error) {
        throw error;
    }
}

module.exports.addCourse = async function (data) {
    try {
        let semdata = await subjectModel.findOne({ '_id': data.semid });

        semdata.course.push({
            coursename: data.coursename,
            courseid: data.courseid
        });
        let savedata = await semdata.save();
        return savedata;
    } catch (error) {
        throw error;
    }
}

module.exports.updateCourse = async function (data) {
    try {
        let resdata = await subjectModel.findOne({ '_id': data.semid });
        let thisid = resdata.course.id(data.subjectid);
        if (data.type === '1') {
            thisid.coursename = data.coursename;
            thisid.courseid = data.courseid;
            let update = await resdata.save();
            let allrecord = await subjectModel.find();
            return allrecord;
        }
        return thisid;
    } catch (error) {
        throw error;
    }
}

module.exports.deleteCourse = async function (data) {
    try {
        let findsem = await subjectModel.findOne({ '_id': data.semid })
        let deletesubject = await findsem.course.id(data.subjectid).remove();
        let updatedata = await findsem.save();
        return deletesubject;
    } catch (error) {
        throw error;
    }
}

//delete brnach

module.exports.deleteBranch = async function(data){
    try{
        let deletebranch = await subjectModel.findByIdAndRemove({'_id':data});
        return deletebranch;
    }catch(error){
        throw error;
    }
}