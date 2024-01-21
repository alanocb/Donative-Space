const express = require('express');
const router = express.Router();
const Campanha = require("../models/campanhaModel");
const utils = require("../config/utils");
const auth = require("../middleware/auth");



router.get('', async (req,res) => {
    try {
      const result = await Campanha.getCampanhas();
      res.status(result.status).json(result.result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Something went wrong.' });
    }
});


router.post('/updateVoluntario', async (req, res) => {
    const { campanhaId } = req.body;
    try {
        const result = await Campanha.updateVoluntarioCount(campanhaId);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Something went wrong.' });
    }
});


router.post('',  async (req, res) => {
  try {
    console.log(req.body)
      const { org_id, nome_evento, data_inicio, data_termino, campanha_observacao, campanha_necessidade, campanha_voluntario, campanha_img } = req.body.org_id;

      
      //const org_id = user.org_id;

      if (!org_id || !nome_evento || !data_inicio || !data_termino || !campanha_observacao || !campanha_necessidade || isNaN(campanha_voluntario) || !campanha_img) {
          return res.status(400).json({ msg: 'Campos obrigatórios ausentes ou inválidos.' });
      }

      const newCampanha = {
          org_id,
          nome_evento,
          data_inicio,
          data_termino,
          campanha_observacao,
          campanha_necessidade,
          campanha_voluntario,
          campanha_img,
      };

      const result = await Campanha.createCampanha(newCampanha);
  
      res.status(result.status).json(result.result);
  } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Algo deu errado.' });
  }
});

  module.exports = router;