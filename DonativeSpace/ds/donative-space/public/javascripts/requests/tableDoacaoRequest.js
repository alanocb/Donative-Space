// requestTableDoacoes.js

async function requestGetTableDoacoesByDoadorId(doadorId) {
    try {
        const response = await fetch('/api/tabledoacao', {
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
            tabledoacoes: result
        };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong while fetching tabledoacoes.' } };
    }
}

// Add other request functions as needed
