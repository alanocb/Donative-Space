const express = require('express');
const router = express.Router();
const Org = require("../models/organizacaoLogModel");
const utils = require("../config/utils");
const auth = require("../middleware/auth");
const tokenSize = 64;


router.get('', async (req,res) => {
    try {
      const result = await Org.getOrgs();
      res.status(result.status).json(result.result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Something went wrong.' });
    }
  });

// Get information about the authenticated user (only the name)

router.get('/auth',auth.verifyAuth,  async function (req, res, next) {
    try {
        console.log("Get authenticated org");
        let result = await Org.getById(req.org.id);
        if (result.status != 200) 
            res.status(result.status).send(result.result);
        let org = new Org();
        // sendig only the name
        org.organizacao_nome = result.result.name;
        res.status(result.status).send(org);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


  

router.post('', async function (req, res, next) {
    try {
        console.log("Register org ");
        let org = new Org();
        org.organizacao_nome = req.body.username;
        org.organizacao_email = req.body.email;
        org.organizacao_senha = req.body.password;
        let result = await Org.register(org);
        res.status(result.status).send(result.result);
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Something went wrong.Routes registo' });
    }
});

router.delete('/auth', auth.verifyAuth,
    async function (req, res, next) {
    try {
        console.log("Logout org ");
        // this will delete everything in the cookie
        req.session = null;
        // Put database token to null (req.user token is undefined so saving in db will result in null)
        let result = await Org.saveToken(req.org);
        res.status(200).send({ msg: "Org logged out!" });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/auth', async function (req, res, next) {
    try {
        console.log("Login user ");
        let org = new Org();
        org.organizacao_nome = req.body.username;
        org.organizacao_senha = req.body.password;
        let result = await Org.checkLogin(org);
        if (result.status != 200) {
            res.status(result.status).send(result.result);
            return;
        }
        // result has the user with the database id
        org = result.result;
        let token = utils.genToken(tokenSize);
        // save token in cookie session
        req.session.token = token;
        // and save it on the database
        org.token = token;
        result = await Org.saveToken(org);
        res.status(200).send({msg: "Successful Login!"});
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Something went wrong. Routes Login' });
    }
});



module.exports = router;