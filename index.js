const express = require("express");
const path = require("path");
const { createServer, registerProcessor } = require("@purnapattela/q-lite");

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 4000;

const apiKey = "f14f102e9329fd5466f5d408c6b6d994";

registerProcessor("emailQueue", async (job) => {
    await new Promise((r) => setTimeout(r, 2000));
    return `Processed email for ${job.to}`;
});

createServer(apiKey, 3000);
console.log("Q-Lite dashboard running at http://localhost:3000");
console.log("API Key:", apiKey);

app.get("/without-queue", async (req, res) => {
    const start = Date.now();
    await new Promise((r) => setTimeout(r, 2000));
    const end = Date.now();

    res.json({
        mode: "without-queue",
        task: "Processed directly",
        timeTaken: (end - start) + " ms"
    });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Demo app running at http://localhost:${port}`);
});
