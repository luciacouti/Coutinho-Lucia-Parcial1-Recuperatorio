import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

async function getClients(filter = {}) {
  try {
    await client.connect();

    const filterMongo = {};
    if (filter.name) {
      filterMongo.name = { $regex: filter.name, $options: "i" }; // i = insensible a mayúsculas y minúsculas
    }
    return db.collection("Clients").find(filterMongo).toArray();
  } catch (err) {
    throw err;
  }
}

async function getClientById(idClient) {
  try {
    await client.connect();
    const filterMongo = { _id: new ObjectId(idClient) };
    return db.collection("Clients").findOne(filterMongo);
  } catch (err) {
    throw err;
  }
}

async function createClient(clientNew) {
  try {
    await client.connect();
    await db.collection("Clients").insertOne(clientNew);
    return clientNew;
  } catch (err) {
    throw err;
  }
}

export { getClients, createClient, getClientById };
