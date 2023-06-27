import express from "express";
import * as controller from "../controllers/projects.controllers.js";

const route = express.Router();

route.get("/projects", controller.getProjects);

route.post("/projects/nuevo", controller.createProject);

route.post("/projects/:idProject/edit", controller.editProject);

route.post("/projects/:idProject/delete", controller.deleteProject);

export default route;
