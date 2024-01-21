const pool = require("../config/database");



class Organizacao {
    constructor(org_id, org_name,org_descricao, org_telefone, org_email, org_img) {
        this.org_id = org_id;
        this.org_name = org_name;
        this.org_descricao = org_descricao;
        this.org_telefone = org_telefone;
        this.org_email = org_email;
        this.org_img = org_img;
        

    }
    


    static async getOrganizacaos() {
        try {
          const dbResult = await pool.query('select * from organizacao');
          const dbOrganizacao = dbResult.rows;
          const dborganizacaos = dbOrganizacao.map((organizacao) => new Organizacao( organizacao.org_id, organizacao.org_name,organizacao.org_descricao, organizacao.org_telefone, organizacao.org_email, organizacao.org_img));
          return { status: 200, result: dborganizacaos };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

      

}

module.exports = Organizacao;