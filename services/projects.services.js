import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getProjects(filter = {}) {
  try {
    await client.connect();

    const filtroMongo = {};

    if (filter?.section) {
      filtroMongo.section = filter.section;
    }

    if (filter?.technologies) {
      filtroMongo.technologies = { $all: filter.technologies.split(";") };
    }

    return db.collection("Projects").find(filtroMongo).toArray();
  } catch (error) {
    throw error;
  }
}

async function getProjectById(id) {
  try {
    await client.connect();
    return db.collection("Projects").findOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  }
}

async function createProject(project) {
  try {
    await client.connect();
    await db.collection("Projects").insertOne(project);
    return project;
  } catch (error) {
    throw error;
  }
}

async function editProject(idProject, project) {
  try {
    await client.connect();
    await db
      .collection("Projects")
      .updateOne({ _id: new ObjectId(idProject) }, { $set: project });
    return project;
  } catch (error) {
    throw error;
  }
}

async function deleteProject(idProject) {
  try {
    await client.connect();
    await db.collection("Projects").deleteOne({ _id: new ObjectId(idProject) });

    return {
      id: idProject,
    };
  } catch (error) {
    throw error;
  }
}

async function getProjectsByClient(idClient) {
  try {
    await client.connect();
    return db.collection("Projects").find({ clientId: idClient }).toArray();
  } catch (err) {
    throw err;
  }
}

export {
  getProjects,
  getProjectById,
  createProject,
  editProject,
  deleteProject,
  getProjectsByClient,
};
