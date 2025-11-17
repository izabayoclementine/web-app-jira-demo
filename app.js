const express = require("express");
const app = express();
const PORT = 3000;

// Homepage route
app.get("/", (req, res) => {
    res.send("Welcome to the Jira Integration Demo App");
});

// ⭐ New route example (e.g., for WEB-123)
app.get("/home", (req, res) => {
    res.send("This is the new homepage route created in a new branch.");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

