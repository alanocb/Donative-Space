async function requestEntrega() {
    try {
        const response = await fetch('/api/entrega');
        const result = await response.json();
        return {
            successful: response.status === 200,
            unauthenticated: response.status === 401,
            entregas: result
        };
    } catch (err) {
        console.log(err);
        return { err: err };
    }
}