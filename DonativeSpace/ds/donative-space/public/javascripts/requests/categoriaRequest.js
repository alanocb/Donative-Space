async function requestCategoria() {
    try {
        const response = await fetch('/api/categoria');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            categorias: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}