const router = require("express").Router();
const Users = require("./usersModel"); 

router.get("/", (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET users"}, err);
    });
});

module.exports = router;