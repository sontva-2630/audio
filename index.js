const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const part = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(part.join(__dirname + "/audio.html"));
});

app.listen(PORT, () => {
  console.log("App run on ", PORT);
});
