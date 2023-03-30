const express = require("express");
const app = express();

const PORT = 3000;

const db = [
    {
        name: "Amel",
        origin: "Disitu lah pokoknya",
        role: "newbie"
    },
];

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ 
        data: db 
    });
});

app.post("/", (req, res) => {
    const {name, origin, role} = req.body;
    if(!name || !origin || !role){
        res.status(400).json({message: "Name, Origin, and Role must be filled!"});
    }
    db.push({name, origin, role});
    res.status(201).json({message: "Data sucessfully added"});
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
