const pool = require("../config/database");



class Donativofisico {
    constructor( donativofisico_id, don_name, don_email, don_telefone, don_observacao, doador_id, categoria_id, org_id, entrega_id) {
        this.donativofisico_id = donativofisico_id;
        this.don_name = don_name;
        this.don_email = don_email;
        this.don_telefone = don_telefone;
        this.don_observacao = don_observacao;
        this.doador_id = doador_id;
        this.categoria_id = categoria_id;
        this.org_id = org_id;
        this.entrega_id = entrega_id;
    }
    


    static async getAllDonativofisicos() {
        try {
            const dbResult = await pool.query('SELECT * FROM donativofisico');
            const dbDonativofisicos = dbResult.rows;
            const donativofisicos = dbDonativofisicos.map((donativofisico) => new Donativofisico(
                donativofisico.donativofisico_id,
                donativofisico.don_name,
                donativofisico.don_email,
                donativofisico.don_telefone,
                donativofisico.don_observacao,
                donativofisico.doador_id,
                donativofisico.categoria_id,
                donativofisico.org_id,
                donativofisico.entrega_id,
            ));
            return { status: 200, result: donativofisicos };
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }


    static async createDonativofisico(newDonativofisico) {
        try {
            const {
                don_name,
                don_email,
                don_telefone,
                don_observacao,
                doador_id,
                categoria_id,
                org_id,
                entrega_id,
            } = newDonativofisico;

            const dbResult = await pool.query(
                'INSERT INTO donativofisico (don_name, don_email, don_telefone, don_observacao, doador_id, categoria_id, org_id, entrega_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [don_name, don_email, don_telefone, don_observacao, doador_id, categoria_id, org_id, entrega_id]
            );

            const createdDonativofisico = dbResult.rows[0];
            return {
                status: 201,
                result: new Donativofisico(
                    createdDonativofisico.donativofisico_id,
                    createdDonativofisico.don_name,
                    createdDonativofisico.don_email,
                    createdDonativofisico.don_telefone,
                    createdDonativofisico.don_observacao,
                    createdDonativofisico.doador_id,
                    createdDonativofisico.categoria_id,
                    createdDonativofisico.org_id,
                    createdDonativofisico.entrega_id
                ),
            };
        } catch (err) {
            console.log(err);
            return { status: 500, result: { msg: 'Something went wrong.' } };
        }
    }
}



module.exports = Donativofisico;