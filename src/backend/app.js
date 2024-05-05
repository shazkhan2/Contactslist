const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const contactsRouter = require("./api/contacts");
//The body function has changed after version 15 while I am using 16. If put request doesnt work then install bodyparser
//const bodyParser = require("body-parser");
//npm install --save body-parser


const buildPath = path.join(__dirname, "../../dist");
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.static(buildPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

router.use("/contacts", contactsRouter);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file"
}

app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});


module.exports = app;