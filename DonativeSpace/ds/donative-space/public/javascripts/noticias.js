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

document.getElementById('noticiaForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const texto = document.getElementById('texto').value;
    const imagem = document.getElementById('imagem').value;
    const data = document.getElementById('data').value;

    if (!titulo || !descricao || !texto || !imagem || !data) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
    }

    const orgId = getOrgIdFromLocalStorage(); 

    const noticiaData = {
        org_id: 6, //TODO orgId,
        noticia_title: titulo,
        noticia_descricao: descricao,
        noticia_texto: texto,
        noticia_img: imagem,
        noticia_date: data,
    };

    try {
        const result = await criarNoticia(noticiaData);
        console.log(result)
        if (result.successful) {
            alert('Notícia criada com sucesso!');
            // Atualizar a página após o envio bem-sucedido.
            window.location.reload();
        } else if (result.unauthenticated) {
            alert('Não autenticado. Faça login para criar uma notícia.');
        } else {
            alert('Erro ao criar notícia. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error(error);
        alert('Erro interno do servidor. Tente novamente mais tarde.');
    }
});

function getOrgIdFromLocalStorage() {
    const orgId = localStorage.getItem('org_id');
    return orgId !== null ? orgId : 'valor_padrao'; // Substitua 'valor_padrao' pelo valor padrão desejado.
}
