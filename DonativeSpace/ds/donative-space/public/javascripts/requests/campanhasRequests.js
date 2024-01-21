async function requestCampanhas() {
    try {
        const response = await fetch('/api/campanhas');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            campanhas: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function updateVoluntarioCount(campanhaId) {
    try {
        const response = await fetch('/api/campanhas/updateVoluntario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ campanhaId: campanhaId }),
        });
        const result = await response.json();
        return {
            successful: response.status === 200,
            notFound: response.status === 404,
            result: result,
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function criarCampanha(
    org_id,
    org_name,
    org_telefone,
    org_email,
    nome_evento,
    campanha_observacao,
    campanha_necessidade,
    campanha_voluntario,
    data_inicio,
    data_termino,
    campanha_img
) {
    try {
        const response = await fetch(`/api/campanhas`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                org_id,
                org_name,
                org_telefone,
                org_email,
                nome_evento,
                campanha_observacao,
                campanha_necessidade,
                campanha_voluntario,
                data_inicio,
                data_termino,
                campanha_img
            })
        });

        return { successful: response.status === 200 };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong. Request criarCampanha' } };
    }
}
