const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

dotenv.config();

connectDb();

const port = 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
