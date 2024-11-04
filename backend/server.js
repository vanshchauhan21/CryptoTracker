const express = require("express");
const app = express();
const cors = require("cors");
const ContactRoutes = require("./routes/contactroutes");
app.use(cors());
app.use(express.json());
app.use("/api/contact", ContactRoutes);

app.listen(5000, () => {
  console.log("server running on port 5000");
});
