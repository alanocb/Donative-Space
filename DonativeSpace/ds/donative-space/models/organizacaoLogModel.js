const bcrypt = require('bcrypt');
const pool = require("../config/database");
const auth = require("../config/utils");
const saltRounds = 10; 

function dbOrgToOrg(dbOrg)  {
    let org = new Org();
    org.organizacao_id = dbOrg.doador_id;
    org.organizacao_nome = dbOrg.nome;
    return org;
}

class Org {
    constructor(organizacao_id, organizacao_nome, organizacao_email, organizacao_senha, organizacao_token) {
        this.organizacao_id = organizacao_id;
        this.organizacao_nome = organizacao_nome;
        this.organizacao_email = organizacao_email;
        this.organizacao_senha = organizacao_senha;
        this.organizacao_token = organizacao_token;
    }
    export() {
        let org =new Org();
        org.organizacao_nome = this.organizacao_nome;
        return org; 
    }


    static async getById(id) {
        try {
            let dbResult = await pool.query("Select * from org where organizacao_id=$1",[id]);
            let dbOrgs = dbResult.rows;
            if (!dbOrgs.length) 
                return { status: 404, result:{msg: "No org found for that id."} } ;
            let dbOrg = dbOrgs[0];
            return { status: 200, result: 
                new Org(dbOrg.organizacao_id, dbOrg.organizacao_nome, dbOrg.organizacao_senha, dbOrg.organizacao_token)} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }  
    }

    static async register(org) {
        try {
            let dbResult = await pool.query("SELECT * FROM org WHERE organizacao_nome = $1", [org.organizacao_nome]);
            let dbOrgs = dbResult.rows;
            if (dbOrgs.length)
                return {
                    status: 400, result: [{
                        location: "body", param: "name",
                        msg: "That name already exists"
                    }]
                };
            let encpass = await bcrypt.hash(org.organizacao_senha, saltRounds);
            dbResult = await pool.query(`
                INSERT INTO org (organizacao_nome, organizacao_email, organizacao_senha)
                VALUES ($1, $2, $3)`, [org.organizacao_nome, org.organizacao_email, encpass]);
            return { status: 200, result: { msg: "Registered! You can now log in." } };
        } catch (err) {
            console.error(err);
            return { status: 500, result: { msg: 'Something went wrong. Register Model' } };
        }
    }
    
 

    static async checkLogin(org) {
        try {
            let dbResult =
                await pool.query("Select * from org where organizacao_nome=$1", [org.organizacao_nome]);
            let dbOrgs = dbResult.rows;
            if (!dbOrgs.length)
                return { status: 401, result: { msg: "Wrong username or password!"}};
            let dbOrg = dbOrgs[0]; 
            let isPass = await bcrypt.compare(org.organizacao_senha,dbOrg.organizacao_senha);
            if (!isPass) 
                return { status: 401, result: { msg: "Wrong username or password!"}};
           
            return { status: 200, result: dbOrgToOrg(dbOrg) } ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong. Login Model' } };
        }
    }

    // No verifications. Only to use internally
    static async saveToken(org) {
        try {
            let dbResult =
                await pool.query(`Update org set token=$1 where organizacao_id = $2`,
                [org.organizacao_token,org.organizacao_id]);
            return { status: 200, result: {msg:"Token saved!"}} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }

    static async getOrgByToken(token) {
        try {
            let dbResult =
                await pool.query(`Select * from org where organizacao_token = $1`,[token]);
            let dbOrgs = dbResult.rows;
            if (!dbOrgs.length)
                return { status: 403, result: {msg:"Invalid authentication!"}} ;
            let org = dbOrgToOrg(dbOrgs[0]);
            return { status: 200, result: org} ;
        } catch (err) {
            console.log(err);
            return { status: 500, result: err };
        }
    }


    static async getOrgs() {
        try {
          const dbResult = await pool.query('SELECT * FROM org');
          const dbOrg = dbResult.rows;
          const orgs = dbOrg.map((org) => new Org(org.organizacao_id, org.organizacao_nome, org.organizacao_email, org.organizacao_senha, org.organizacao_token));
          return { status: 200, result: orgs };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

      

}

module.exports = Org;