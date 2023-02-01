import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {PORT} from "./config.js";
//import ejs from "ejs"

import indexRoutes from './routes/routes.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//rutas
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))


app.listen(PORT);
console.log(`server on port ${PORT}`);
