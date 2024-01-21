// requestTabelaVoluntarios.js

async function requestGetTabelaVoluntariosByDoadorId(doadorId) {
    try {
        const response = await fetch('/api/tabelavoluntario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ doadorId })
        });

        const result = await response.json();
        return {
            successful: response.status === 200,
            tabelaVoluntarios: result
        };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong while fetching tabelaVoluntarios.' } };
    }
}

// Add other request functions as needed
