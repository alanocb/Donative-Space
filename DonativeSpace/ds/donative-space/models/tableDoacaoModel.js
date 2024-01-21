// tabledoacaoModel.js

const pool = require("../config/database");

class TabelaDoacao {
    constructor(donativofisico_id, don_observacao, categoria_name, org_name,entrega_name) {
        this.donativofisico_id = donativofisico_id;
        this.don_observacao = don_observacao;
        this.categoria_name = categoria_name;
        this.org_name = org_name;
        this.entrega_name = entrega_name;
    }

    static async getTableDoacaoByDoadorId(doadorId) {
        try {
            const query = `
                SELECT *
                FROM donativofisico
                JOIN categoria ON donativofisico.categoria_id = categoria.categoria_id
                JOIN organizacao ON donativofisico.org_id = organizacao.org_id
                JOIN entrega ON donativofisico.entrega_id = entrega.entrega_id
                WHERE donativofisico.doador_id = $1;
            `;

            const dbResult = await pool.query(query, [doadorId]);
            const dbTableDoacoes = dbResult.rows;

            const tableDoacoes = dbTableDoacoes.map((tableDoacao) => ({
                donativofisico_id: tableDoacao.donativofisico_id,
                don_observacao: tableDoacao.don_observacao,
                categoria_name: tableDoacao.categoria_name,
                org_name: tableDoacao.org_name,
                entrega_name: tableDoacao.entrega_name
            }));

            return { status: 200, result: tableDoacoes };
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }

    // Add other methods as needed

}

module.exports = TabelaDoacao;
