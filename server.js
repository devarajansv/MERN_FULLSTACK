const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routs/api/users");
const authRoute = require("./routs/api/auth");
const profileRoute = require("./routs/api/profile");
const postsRoute = require("./routs/api/posts");
const path = require("path");

const app = express();

//connect db

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);

//Serve static assets in production

if (process.env.NODE_ENV === "production") {
  // SET static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`));
