const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Template engine
app.engine(
  ".hbs",
  engine({
    partialsDir: "src/views/partials",
    layoutsDir: "src/views/layouts",
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(path.dirname(__dirname), "/src/views"));

// HTTP logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
