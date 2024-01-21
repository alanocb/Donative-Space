const pool = require("../config/database");



class Voluntario {
    constructor(voluntario_id, nome, email, campanha_id, doador_id, telefone) {
        this.voluntario_id = voluntario_id;
        this.nome = nome;
        this.email = email;
        this.campanha_id = campanha_id;
        this.doador_id = doador_id;
        this.telefone = telefone;
        

    }
    


    static async getAllVoluntarios() {
        try {
            const dbResult = await pool.query('SELECT * FROM voluntario');
            const dbVoluntarios = dbResult.rows;
            const voluntarios = dbVoluntarios.map((voluntario) => new Voluntario(
                voluntario.voluntario_id,
                voluntario.nome,
                voluntario.email,
                voluntario.campanha_id,
                voluntario.doador_id,
                voluntario.telefone
            ));
            return { status: 200, result: voluntarios };
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

    static async createVoluntario(newVoluntario) {
        try {
            const { nome, email, campanha_id, doador_id, telefone } = newVoluntario;
            const dbResult = await pool.query(
                'INSERT INTO voluntario (nome, email, campanha_id, doador_id, telefone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [nome, email, campanha_id, doador_id, telefone]
            );
            const createdVoluntario = dbResult.rows[0];
            return { status: 201, result: new Voluntario(
                createdVoluntario.voluntario_id,
                createdVoluntario.nome,
                createdVoluntario.email,
                createdVoluntario.campanha_id,
                createdVoluntario.doador_id,
                createdVoluntario.telefone
            )};
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }
}


module.exports = Voluntario;