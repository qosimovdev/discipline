const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/tasks", require("./routes/task.routes"))

app.get("/", (req, res) => {
    res.send("DISCIPLINE API running...");
});

module.exports = app