import express from "express";
import * as controller from "../controllers/clients.api.controller.js";
import * as projectController from "../controllers/projects.api.controllers.js";

const route = express.Router();
route.get("/clients", controller.getClients);
route.post("/clients", controller.createClient);
route.post("/clients/:idClient/projects", projectController.createProject);
route.get("/clients/:idClient/projects", controller.getProjectsByClient);

export default route;
