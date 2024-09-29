const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ LostItems: ["pen", "banana", "orange", "mango", "guava", "kiwi"]});
});

app.listen(8080, () => {
    console.log("server started on port 8080");
});