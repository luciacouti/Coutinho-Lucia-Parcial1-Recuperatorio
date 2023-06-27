import { Router } from "express";
import * as controller from "../controllers/projects.api.controllers.js";

const route = Router();

route.get("/projects", controller.getProjects);
route.put("/projects/:idProject", controller.updateProject);
route.delete("/projects/:idProject", controller.deleteProject);

export default route;
