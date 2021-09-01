const express = require("express");
const app = express();
const part = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(part.join(__dirname + "/audio.html"));
});

const PORT = process.env.PORT || 4000;
console.log(PORT);

app.listen(PORT, () => {
  console.log("App run on ", PORT);
});
