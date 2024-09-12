const projectModel = require("../models/ProjectsModel");
exports.getProjectsController = async (req, res) => {
  try {
    const projects = await projectModel.find();
    if (projects) {
      res.status(200).json({
        success: true,
        message: "All projects fetched",
        length: projects.length,
        projects,

      });
    } else {
      res.status(400).json({
        success: false,
        message: "There was an error in fetching projects",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.createProjectController = async (req, res, next) => {
  try {

    const project = await projectModel.create(req.body);
    if (project) {
      res.status(201).json({
        success: true,
        message: "Project created",
        project,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "There was an error in creating the project",
      });
    }
  } catch (err) {
    console.log(req.body.name);
    console.log(err);
  }
  next();
};


exports.getSingleProjectController = async(req, res) =>{
try{
    
  const project = await projectModel.findById(req.params.id);
  if(project){
    res.status(200).json({
      success:true,
      message:"Project Fetched",
      project
    });
  }
  else{
    res.status(400).json({
      success:false,
      message:"Unable to find the project"
    })
  }

}
catch(err){
  console.log(err);
}
}