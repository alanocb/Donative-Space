// TabelaVoluntarioModel.js

const pool = require("../config/database");

class TabelaVoluntario {
    constructor(voluntario_id, org_name, nome_evento, data_inicio, data_termino) {
        this.voluntario_id = voluntario_id;
        this.org_name = org_name;
        this.nome_evento = nome_evento;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
    }

    static async getTableVoluntarioByDoadorId(doadorId) {
        try {
            const query = `
                SELECT *
                FROM voluntario
                JOIN campanha ON voluntario.campanha_id = campanha.campanha_id
                JOIN organizacao ON campanha.org_id = organizacao.org_id
                WHERE voluntario.doador_id = $1;
            `;

            const dbResult = await pool.query(query, [doadorId]);
            const dbTableVoluntarios = dbResult.rows;

            const tableVoluntarios = dbTableVoluntarios.map((tableVoluntario) => ({
                voluntario_id: tableVoluntario.voluntario_id,
                org_name: tableVoluntario.org_name,
                nome_evento: tableVoluntario.nome_evento,
                data_inicio: tableVoluntario.data_inicio,
                data_termino: tableVoluntario.data_termino
            }));

            return { status: 200, result: tableVoluntarios };
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

    // Add other methods as needed

}

module.exports = TabelaVoluntario;
