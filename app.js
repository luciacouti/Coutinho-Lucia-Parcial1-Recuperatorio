import express from "express";
import ProjectRoute from "./routes/projects.routes.js";
import ProjectRouteApi from "./api/routes/projects.api.routes.js";
import ClientRouteApi from "./api/routes/clients.api.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/api", express.json());

app.use("/", express.static("public"));

app.use("/", ProjectRoute);
app.use("/api", ProjectRouteApi);
app.use("/api", ClientRouteApi);

app.listen(2222, function () {
  console.log("Server corriendo en http://localhost:2222");
});
