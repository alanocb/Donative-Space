window.onload = async function () {
    try {
        let res = await requestCampanhas();
        let resN = await requestNoticias();

        populateCampanha(res.campanhas);
        populateNoticias(resN.noticias);
        populateRecentNews(resN.noticias);
    } catch (err) {
        console.error(err);
        // alert("Something went wrong!")
    }
}

// campanha.js

// Function to create a new campaign
async function criarCampanha(campanhaData) {
    try {
        const response = await fetch('/api/campanhas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campanhaData),
        });

        const result = await response.json();

        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            message: result.message,
        };
    } catch (err) {
        console.error(err);
        return { err: err };
    }
}

// Function to handle campaign form submission
document.getElementById('campanhaForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome_evento = document.getElementById('campanha_title').value;
    const data_inicio = document.getElementById('campanha_dataInicio').value;
    const data_termino = document.getElementById('campanha_dataTermino').value;
    const campanha_observacao = document.getElementById('campanha_descricao').value;
    const campanha_necessidade = document.getElementById('campanha_necessidade').value;
    const campanha_voluntario = parseInt(document.getElementById('campanha_voluntario').value);
    const campanha_img = document.getElementById('campanha_img').value;

    if (!nome_evento || !data_inicio || !data_termino || !campanha_observacao || !campanha_necessidade || isNaN(campanha_voluntario) || !campanha_img) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    const orgId = getOrgIdFromLocalStorage();

    const campanhaData = {
        org_id: orgId,
        nome_evento: nome_evento,
        data_inicio: data_inicio,
        data_termino: data_termino,
        campanha_observacao: campanha_observacao,
        campanha_necessidade: campanha_necessidade,
        campanha_voluntario: campanha_voluntario,
        campanha_img: campanha_img,
    };

    try {
        const result = await criarCampanha(campanhaData);
        console.log(result);
        if (result.successful) {
            alert('Campanha criada com sucesso!');
            // Atualizar a página após o envio bem-sucedido.
            window.location.reload();
        } else if (result.unauthenticated) {
            alert('Não autenticado. Faça login para criar uma campanha.');
        } else {
            alert('Erro ao criar campanha. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error(error);
        alert('Erro interno do servidor. Tente novamente mais tarde.');
    }
});

// Function to retrieve organization ID from local storage
function getOrgIdFromLocalStorage() {
    const orgId = localStorage.getItem('org_id');
    return orgId !== null ? orgId : '5'; 
}

// Additional functions or logic related to campaigns can be added here
