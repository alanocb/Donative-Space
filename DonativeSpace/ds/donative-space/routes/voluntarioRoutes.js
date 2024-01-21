// voluntarioRoutes.js

const express = require('express');
const router = express.Router();
const Voluntario = require('../models/voluntarioModel');

// Create a new voluntario
router.post('', async (req, res) => {
    try {
        const newVoluntarioData = req.body; // Assuming the data is sent in the request body
        const result = await Voluntario.createVoluntario(newVoluntarioData);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Get all voluntarios
router.get('', async (req, res) => {
    try {
        const result = await Voluntario.getAllVoluntarios();
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Add other routes as needed for updating, deleting, or getting a specific voluntario

module.exports = router;
