import * as service from "../../services/clients.services.js";
import * as projectService from "../../services/projects.services.js";
import { isValidId } from "../../pages/utils.js";

function getClients(req, res) {
  const filter = req.query;
  service
    .getClients(filter)
    .then(function (clients) {
      res.status(200).json(clients);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocurrió un error al obtener los proyectos del cliente",
      });
    });
}

function getProjectsByClient(req, res) {
  const idClient = req.params.idClient;

  if (!isValidId(idClient)) {
    return res.status(400).json({ message: "id inválido" });
  }

  projectService
    .getProjectsByClient(idClient)
    .then(function (projects) {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(200).json([]);
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocurrió un error al obtener los proyectos del cliente",
      });
    });
}

function createClient(req, res) {
  const newClient = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
  };

  service
    .createClient(newClient)
    .then(function (newClient) {
      res.status(201).json(newClient);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).json({
        message: "Ocurrió un error y no se pudo crear el cliente",
      });
    });
}

export { getClients, getProjectsByClient, createClient };
