async function requestNoticias() {
    try {
        const response = await fetch('/api/noticias');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            noticias: result 
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}

async function criarNoticia(org_id, org_name, noticia_id, noticia_title, noticia_descricao, noticia_texto, noticia_img, noticia_date) {
    try {
        const response = await fetch(`/api/noticias/`, 
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          method: "POST",
          body: JSON.stringify({
            org_id: org_id,
            org_name: org_name,
            noticia_id: noticia_id,
            noticia_title: noticia_title,
            noticia_descricao: noticia_descricao,
            noticia_texto: noticia_texto,
            noticia_img: noticia_img,
            noticia_date: noticia_date,
        
          })
        });
        // We are not checking for errors (considering the GUI is only allowing correct choices)
        // We only need to send if the user registered or not 
        return { successful: response.status == 200};
    } catch (err) {
        // Treat 500 errors here
        console.log(err);
        return {err: { msg: 'Something went wrong. Request Registo' }};
    }
}