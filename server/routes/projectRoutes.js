const express = require("express");
const router = express.Router();
const {
  getProjectsController,
  createProjectController,
  getSingleProjectController
} = require("../controllers/projectController");

router.get("/get-all-projects", getProjectsController);

router.get("/get-project/:id", getSingleProjectController )

router.post("/create-project", createProjectController);

module.exports = router;
