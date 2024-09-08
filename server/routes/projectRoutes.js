const express = require("express");
const router = express.Router();
const {
  getProjectsController,
  createProjectController,
} = require("../controllers/projectController");

router.get("/get-all-projects", getProjectsController);

router.post("/create-project", createProjectController);

module.exports = router;
