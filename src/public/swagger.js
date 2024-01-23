import path from "path";
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Options de configuration pour swagger-jsdoc
const options = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: "http://localhost:5000/api-docs/",
      },
    ],
    info: {
      title: "My Back-end",
      version: "1.0.0",
      description: "CRUD REST API",
      contact: {
        name: "Olivier app",
        url: "mybackend.com",
        email: "olivier@gmail.com",
      },
    },
  },
  apis: [path.resolve(__dirname, "../routes/userRoutes.js")],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
