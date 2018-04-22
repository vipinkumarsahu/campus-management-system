const classcodeModel = require('../../models/common/classcode.model');

module.exports.getClass = async function () {
    try{
        let data = await classcodeModel.find();
        return data;
    }catch(error){
        throw error;
    }
}

module.exports.addClass = async function(data){
    try{
        let dataobj = new classcodeModel(data);
        let result = await dataobj.save();
        return result;
    }catch(error){
        throw error;
    }
}

module.exports.updateClass = async function(data){
    try{
        let resdata = await classcodeModel.findById({'_id':data});
        return resdata;
    }catch(error){
        throw error;
    }
}

module.exports.updateClassData = async function(data){
    try{
        let result = await classcodeModel.findById({'_id':data.id});
        result.semester = data.semester;
        result.course = data.course;
        result.branch = data.branch;
        result.professor = data.professor;
        let finalResult = await result.save();
        return finalResult;
    }catch(error){
        throw error;
    }
}

module.exports.deleteClass = async function(data){
    try{
        let result = await classcodeModel.findByIdAndRemove({'_id':data});
        return result;
    }catch(error){
        throw error;
    }
}