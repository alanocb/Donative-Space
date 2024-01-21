// tabledoacaoRoutes.js

const express = require('express');
const router = express.Router();
const TabelaDoacao = require('../models/tableDoacaoModel');

// Get tabledoacoes by doador_id using a POST request
router.post('', async (req, res) => {
    try {
        const doadorId = req.body.doadorId;
        const result = await TabelaDoacao.getTableDoacaoByDoadorId(doadorId);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});

// Add other routes as needed

module.exports = router;
