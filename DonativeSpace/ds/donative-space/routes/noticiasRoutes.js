const express = require('express');
const router = express.Router();
const Noticia = require("../models/noticiaModel");
const utils = require("../config/utils");
const auth = require("../middleware/auth");



router.get('', async (req,res) => {
    try {
      const result = await Noticia.getNoticias();
      res.status(result.status).json(result.result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Something went wrong.' });
    }
  });


router.post('', async function (req, res) {
    try {
        const { noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date, org_id } = req.body.org_id;

        //const org_id = req.user.org_id;

        if (!org_id || !noticia_title || !noticia_descricao || !noticia_texto || !noticia_img || !noticia_date) {
            return res.status(400).json({ msg: 'Campos obrigatórios ausentes.' });
        }

        const newNoticia = {
            org_id,
            noticia_title,
            noticia_descricao,
            noticia_texto,
            noticia_img,
            noticia_date
        };

        const result = await Noticia.createNoticia(newNoticia);
        res.status(result.status).json(result.result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Algo deu errado.' });
    }
});

  module.exports = router;