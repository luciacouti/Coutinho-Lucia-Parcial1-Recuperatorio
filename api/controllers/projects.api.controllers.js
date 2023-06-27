import * as service from "../../services/projects.services.js";
import * as clientService from "../../services/clients.services.js";
import { isValidId } from "../../pages/utils.js";

function getProjects(req, res) {
  const filter = req.query;

  service.getProjects(filter).then(function (projects) {
    res.status(200).json(projects);
  });
}

function createProject(req, res) {
  const idClient = req.params.idClient;
  if (!isValidId(idClient)) {
    return res.status(400).json({ message: "id de cliente inválido" });
  }
  const newProject = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
    clientId: req.params.idClient,
  };

  clientService.getClientById(idClient).then(function (client) {
    if (client) {
      service.createProject(newProject).then(function (newProject) {
        return res.status(201).json(newProject);
      });
    } else {
      return res.status(404).json({
        error: { message: `No se encuentra el cliente #${idClient}` },
      });
    }
  });
}

function updateProject(req, res) {
  const idProject = req.params.idProject;

  const updateProject = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
    clientId: req.params.idClient,
  };

  service.getProjectById(idProject).then(function (project) {
    if (project) {
      return service
        .editProject(idProject, updateProject)
        .then(function (project) {
          res.status(200).json(project);
        });
    } else {
      res.status(404).json({
        error: { message: `No se encuentra el proyecto #${idProject}` },
      });
    }
  });
}

function deleteProject(req, res) {
  const idProject = req.params.idProject;

  service.getProjectById(idProject).then(function (project) {
    if (project) {
      return service.deleteProject(idProject).then(function (project) {
        res.status(200).json(project);
      });
    } else {
      res.status(404).json({
        error: { message: `No se encuentra el proyecto #${idProject}` },
      });
    }
  });
}

export { getProjects, createProject, updateProject, deleteProject };
