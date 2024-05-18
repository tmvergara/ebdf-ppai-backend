require("dotenv").config();
const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Configurar middlewares
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    // Importar y usar las rutas
    const userRouter = require("./routes/user.router");
    this.app.use("/users", userRouter);

    const bodegasRouter = require("./routes/pantallaImportarActualizacionBV.router");
    this.app.use("/bodegas", bodegasRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

const server = new Server();
server.listen();
