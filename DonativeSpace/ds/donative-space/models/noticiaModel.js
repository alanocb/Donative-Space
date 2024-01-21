const pool = require("../config/database");



class Noticia {
    constructor(org_id, org_name, noticia_id, noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date) {
        this.org_id = org_id;
        this.org_name = org_name;
        this.noticia_id = noticia_id;
        this.noticia_title = noticia_title;
        this.noticia_descricao = noticia_descricao;
        this.noticia_texto = noticia_texto;
        this.noticia_img = noticia_img;
        this.noticia_date = noticia_date;
        
    }
    


    static async getNoticias() {
        try {
          const dbResult = await pool.query('select * from organizacao, noticias where noticias.org_id = organizacao.org_id');
          const dbNoticia = dbResult.rows;
          const dbnoticias = dbNoticia.map((noticia) => new Noticia( noticia.org_id, noticia.org_name, noticia.noticia_id, noticia.noticia_title, noticia.noticia_descricao, noticia.noticia_texto, noticia.noticia_img, noticia.noticia_date));
          return { status: 200, result: dbnoticias };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }
  
    static async createNoticia(newNoticia) {
      try {
          
          const { org_id, noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date } = newNoticia;

          if (!org_id || !noticia_title || !noticia_descricao || !noticia_texto || !noticia_img || !noticia_date) {
              return { status: 400, result: { msg: 'Campos obrigatórios ausentes.' } };
          }

          // Adicione a coluna org_id diretamente na lista de colunas na inserção SQL
          const insertQuery = 'INSERT INTO noticias (org_id, noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
          const values = [org_id, noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date];
          const dbResult = await pool.query(insertQuery, values);

          const newNoticiaInstance = new Noticia(
              dbResult.rows[0].org_id,
              dbResult.rows[0].org_name,
              dbResult.rows[0].noticia_id,
              dbResult.rows[0].noticia_title,
              dbResult.rows[0].noticia_descricao,
              dbResult.rows[0].noticia_texto,
              dbResult.rows[0].noticia_img,
              dbResult.rows[0].noticia_date
          );

          return { status: 200, result: newNoticiaInstance };
      } catch (err) {
          console.error(err);
          return { status: 500, result: { msg: 'Algo deu errado.' } };
      }
  }


}
      

module.exports = Noticia;