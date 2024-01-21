const pool = require("../config/database");



class Categoria {
    constructor(categoria_id, categoria_name) {
        this.categoria_id = categoria_id;
        this.categoria_name = categoria_name;
    }
    


    static async getCategorias() {
        try {
          const dbResult = await pool.query('select * from categoria');
          const dbCategoria = dbResult.rows;
          const dbcategorias = dbCategoria.map((categoria) => new Categoria( categoria.categoria_id, categoria.categoria_name ));
          return { status: 200, result: dbcategorias };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

      

}

module.exports = Categoria;