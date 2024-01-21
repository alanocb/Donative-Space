const pool = require("../config/database");



class Entrega {
    constructor(entrega_id, entrega_name, entrega_loc) {
        this.entrega_id = entrega_id;
        this.entrega_name = entrega_name;
        this.entrega_loc = entrega_loc;
    }
    


    static async getEntregas() {
        try {
          const dbResult = await pool.query('select * from entrega');
          const dbEntrega = dbResult.rows;
          const dbentregas = dbEntrega.map((entrega) => new Entrega( entrega.entrega_id, entrega.entrega_name, entrega.entrega_loc ));
          return { status: 200, result: dbentregas };
        } catch (err) {
          console.log(err);
          return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

      

}

module.exports = Entrega;