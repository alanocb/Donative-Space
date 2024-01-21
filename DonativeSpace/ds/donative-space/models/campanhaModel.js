const pool = require("../config/database");



class Campanha {
    constructor(org_id, org_name, org_telefone, org_email, nome_evento, campanha_observacao, campanha_necessidade, campanha_voluntario, data_inicio, data_termino, campanha_img, campanha_id) {
        this.org_id = org_id;
        this.org_name = org_name;
        this.org_telefone = org_telefone;
        this.org_email = org_email;
        this.campanha_id = campanha_id;
        this.nome_evento = nome_evento;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
        this.campanha_observacao = campanha_observacao;
        this.campanha_necessidade = campanha_necessidade;
        this.campanha_voluntario = campanha_voluntario;
        this.campanha_img = campanha_img;

    }
    


    static async getCampanhas() {
        try {
          const dbResult = await pool.query('select * from organizacao,campanha where organizacao.org_id = campanha.org_id');
          const dbCampanha = dbResult.rows;
          const dbcampanhas = dbCampanha.map((campanha) => new Campanha( campanha.org_id, campanha.org_name, campanha.org_telefone, campanha.org_email, campanha.nome_evento, campanha.campanha_observacao, campanha.campanha_necessidade, campanha.campanha_voluntario, campanha.data_inicio, campanha.data_termino, campanha.campanha_img, campanha.campanha_id ));
          return { status: 200, result: dbcampanhas };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

    static async updateVoluntarioCount(campanhaId) {
      try {
          const query = 'UPDATE campanha SET campanha_voluntario = campanha_voluntario - 1 WHERE campanha_id = $1 RETURNING *';
          const values = [campanhaId];
          const dbResult = await pool.query(query, values);

          if (dbResult.rows.length > 0) {
              const updatedCampanha = dbResult.rows[0];
              return { status: 200, result: updatedCampanha };
          } else {
              return { status: 404, result: { msg: 'Campaign not found.' } };
          }
      } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
      }
  }

  static async createCampanha(newCampanha) {
    try {
        const {
            org_id,
            nome_evento,
            campanha_observacao,
            campanha_necessidade,
            campanha_voluntario,
            data_inicio,
            data_termino,
            campanha_img
        } = newCampanha;

        

        const insertQuery = 'INSERT INTO campanha (org_id, nome_evento, campanha_observacao, campanha_necessidade, campanha_voluntario, data_inicio, data_termino, campanha_img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';

        const values = [
            org_id,
            nome_evento,
            campanha_observacao,
            campanha_necessidade,
            campanha_voluntario,
            data_inicio,
            data_termino,
            campanha_img
        ];

        const dbResult = await pool.query(insertQuery, values);

        const newCampanhaInstance = new Campanha(
            dbResult.rows[0].org_id,
            dbResult.rows[0].nome_evento,
            dbResult.rows[0].campanha_observacao,
            dbResult.rows[0].campanha_necessidade,
            dbResult.rows[0].campanha_voluntario,
            dbResult.rows[0].data_inicio,
            dbResult.rows[0].data_termino,
            dbResult.rows[0].campanha_img,
            dbResult.rows[0].campanha_id
        );

        return { status: 200, result: newCampanhaInstance };
    } catch (err) {
        console.error(err);
        return { status: 500, result: { msg: 'Something went wrong.' } };
    }
}


    

      

}

module.exports = Campanha;