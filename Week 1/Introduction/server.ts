// Coding Task 1.4 - Building your Counter App for Production
// 1- Create the Express server
// 2- Serve the production build of your React app (built folder) using Express
// 3- Handle requests for the React application
// 4- Start the server and listen on a specified port
// Note: Make sure to install the required dependencies by running `npm install express` before running this server.


const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the production build
app.use(express.static(path.join(__dirname, "built")));

// Handle requests for the React application
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
