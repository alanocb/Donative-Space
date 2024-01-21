// tabelaVoluntarioRoutes.js

const express = require('express');
const router = express.Router();
const TabelaVoluntario = require('../models/tableVoluntarioModel');

// Get tabelaVoluntarios by doador_id using a POST request
router.post('', async (req, res) => {
    try {
        const doadorId = req.body.doadorId;
        const result = await TabelaVoluntario.getTableVoluntarioByDoadorId(doadorId);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Add other routes as needed

module.exports = router;
