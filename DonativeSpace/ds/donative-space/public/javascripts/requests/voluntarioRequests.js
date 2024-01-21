async function requestCreateVoluntario(voluntarioData) {
    try {
        const response = await fetch(`/api/voluntario`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(voluntarioData)
        });

        return { successful: response.status === 201 };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong during voluntario creation.' } };
    }
}

async function requestGetAllVoluntarios() {
    try {
        const response = await fetch('/api/voluntario');
        const result = await response.json();
        return {
            successful: response.status === 200,
            voluntarios: result
        };
    } catch (err) {
        console.error(err);
        return { err: { msg: 'Something went wrong while fetching voluntarios.' } };
    }
}

// Add other request functions as needed for updating, deleting, or getting a specific voluntario
