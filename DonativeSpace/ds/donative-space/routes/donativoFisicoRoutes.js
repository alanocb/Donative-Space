const express = require('express');
const router = express.Router();
const Donativofisico = require('../models/donativoFisicoModel');

// Create a new donativofisico
router.post('', async (req, res) => {
    try {
        const newDonativofisicoData = req.body; // Assuming the data is sent in the request body
        const result = await Donativofisico.createDonativofisico(newDonativofisicoData);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Get all donativofisicos
router.get('', async (req, res) => {
    try {
        const result = await Donativofisico.getAllDonativofisicos();
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Add other routes as needed for updating, deleting, or getting a specific donativofisico

module.exports = router;
