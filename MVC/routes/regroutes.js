const express = require('express');
const { register } = require('../controllers/controllers');
const router = express.Router();

router.post('/register', (req, res) => {
register(req,res)
    //const registerData = req.body;
    

    //res.json(registerData);
});

module.exports = router;
