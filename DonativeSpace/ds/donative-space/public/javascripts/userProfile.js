window.onload = async function () {
    try {
        const userProfile = await requestProfile();
        const user = userProfile.user;

        document.getElementById('username').innerHTML = '<i class="fas fa-solid fa-user fa-fw"></i>&nbsp;' + user.name;
        document.getElementById('points').innerHTML = '<i class="fas fa-solid fa-coins fa-fw"></i>&nbsp;' + user.points;

        updateUserInformation(user);

        const tableDoacoesResult = await requestGetTableDoacoesByDoadorId(user.id);
        if (tableDoacoesResult.successful) {
            displayTableDoacoes(tableDoacoesResult.tabledoacoes);
        } else {
            console.error(tableDoacoesResult.err.msg);
            // Handle the error appropriately, e.g., show an error message
        }

        const tabelaVoluntariosResult = await requestGetTabelaVoluntariosByDoadorId(user.id);
        if (tabelaVoluntariosResult.successful) {
            displayTabelaVoluntarios(tabelaVoluntariosResult.tabelaVoluntarios);
        } else {
            console.error(tabelaVoluntariosResult.err.msg);
            // Handle the error appropriately, e.g., show an error message
        }

        initCalendar(tabelaVoluntariosResult.tabelaVoluntarios);

    } catch (err) {
        console.log(err);
        // Handle the error appropriately, e.g., show an error message
    }
}

async function logout() {
    try {
        let result = await requestLogout();
        if (!result.successful || result.err)
            throw result.err || { err: "Not successfull" }
        window.location.pathname = "/index.html"
    } catch (err) {
        console.log(err);
       // alert("Something is not working");
    }
}

function updateUserInformation(user) {
    document.getElementById('name').textContent = user.name || '';
    document.getElementById('email').textContent = user.email || '';
    document.getElementById('point').textContent = user.points || '';
}


function displayTableDoacoes(tabledoacoes) {
    const tableBody = document.getElementById('tableBody');

    // Clear existing rows
    tableBody.innerHTML = '';

    // Populate the table with data
    tabledoacoes.forEach((tabledoacao) => {
        const row = document.createElement('tr');

        const observacaoCell = document.createElement('td');
        observacaoCell.textContent = tabledoacao.don_observacao;
        row.appendChild(observacaoCell);

        const categoriaCell = document.createElement('td');
        categoriaCell.textContent = tabledoacao.categoria_name;
        row.appendChild(categoriaCell);

        const organizacaoCell = document.createElement('td');
        organizacaoCell.textContent = tabledoacao.org_name;
        row.appendChild(organizacaoCell);

        const entregaCell = document.createElement('td');
        entregaCell.textContent = tabledoacao.entrega_name;
        row.appendChild(entregaCell);

        tableBody.appendChild(row);
    });
}

function displayTabelaVoluntarios(tabelaVoluntarios) {
    const tableBody1 = document.getElementById('tableBody1');

    // Clear existing rows
    tableBody1.innerHTML = '';

    // Helper function to format date
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    }

    // Populate the table with data
    tabelaVoluntarios.forEach((tabelaVoluntario) => {
        const row = document.createElement('tr');

        const organizacaoCell = document.createElement('td');
        organizacaoCell.textContent = tabelaVoluntario.org_name;
        row.appendChild(organizacaoCell);

        const campanhaCell = document.createElement('td');
        campanhaCell.textContent = tabelaVoluntario.nome_evento;
        row.appendChild(campanhaCell);

        const dataInicioCell = document.createElement('td');
        dataInicioCell.textContent = formatDate(tabelaVoluntario.data_inicio);
        row.appendChild(dataInicioCell);

        const dataFimCell = document.createElement('td');
        dataFimCell.textContent = formatDate(tabelaVoluntario.data_termino);
        row.appendChild(dataFimCell);

        tableBody1.appendChild(row);
    });
}

function initCalendar(tabelaVoluntarios) {
    let calendarEvents = [];

    for (let i = 0; i < tabelaVoluntarios.length; i++) {
        const startDate = formatDate(tabelaVoluntarios[i].data_inicio);
        const endDate = formatDate(tabelaVoluntarios[i].data_termino);

        const event = {
            title: tabelaVoluntarios[i].nome_evento,
            start: startDate,
            end: endDate,
            description: tabelaVoluntarios[i].campanha_observacao,
            // Add other properties as needed
        };

        calendarEvents.push(event);
    }

    // Initialize FullCalendar with your events
    $('#calendar').fullCalendar({
        events: calendarEvents,
        // Add other FullCalendar options as needed
    });
}

// Helper function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
}
