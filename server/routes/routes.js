import express from "express";
import {createUser, readUser, updateUser, deleteUser} from "../controllers/server_controllers.js"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
});

app.post("/new-user", (req, res) => {
    createUser(req, res);
});

app.get("/users-read", (req, res) => {
    readUser(req,res)
});

app.put("/update/:id", (req, res) => {
    updateUser(req, res)
})

app.delete("/del-user/:id", (req, res) => {
    deleteUser(req,res)
})

app.listen(3000, () => console.log('Servidor rodando'));