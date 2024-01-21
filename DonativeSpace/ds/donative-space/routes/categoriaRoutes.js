const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoriaModel');
const utils = require("../config/utils");
const auth = require("../middleware/auth");




router.get('', async (req,res) => {
    try {
      const result = await Categoria.getCategorias();
      res.status(result.status).json(result.result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Something went wrong.' });
    }
  });

  module.exports = router;