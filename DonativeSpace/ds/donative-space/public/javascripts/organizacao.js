window.onload = async function () {
    try {
        
        let res = await requestOrganizacaos();

        populateOrganizacao(res.organizacaos);
  
     } catch (err) {
        console.log(err);
       // alert("Something went wrong!")
    }
}


function populateOrganizacao(organizacaos) {
    const container = document.getElementById("organization-container");
    let currentRow;

    for (let i = 0; i < organizacaos.length; i++) {
        if (i % 3 === 0) {
            // Start a new row for every third organization
            currentRow = document.createElement("div");
            currentRow.className = "row";
        }

        const colDiv = document.createElement("div");
        colDiv.className = "col-lg-4 col-md-6 col-12 mb-4 mb-lg-0";

        const customBlockWrap = document.createElement("div");
        customBlockWrap.className = "custom-block-wrap";

        const img = document.createElement("img");
        img.src = organizacaos[i].org_img;
        img.className = "custom-block-image img-fluid";

        const customBlock = document.createElement("div");
        customBlock.className = "custom-block";

        const customBlockBody = document.createElement("div");
        customBlockBody.className = "custom-block-body";

        const h5 = document.createElement("h5");
        h5.className = "mb-3";
        h5.id = "titOrg";
        h5.textContent = organizacaos[i].org_name;

        const p1 = document.createElement("p");
        p1.textContent = organizacaos[i].org_descricao;

        const h6Cont = document.createElement("h6");
        h6Cont.className = "mb-3";
        h6Cont.id = "titCont";
        h6Cont.textContent = "Contactos";

        const strongTelefone = document.createElement("strong");

        const p2 = document.createElement("p");
        p2.innerHTML = `<strong>Telefone:</strong> ${organizacaos[i].org_telefone}`;

        const p3 = document.createElement("p");
        p3.innerHTML = `<strong>Email:</strong> ${organizacaos[i].org_email}`;

        const dFlexContainer = document.createElement("div");
        dFlexContainer.className = "d-flex align-items-center my-2";

        dFlexContainer.appendChild(strongTelefone);

        customBlockBody.appendChild(h5);
        customBlockBody.appendChild(p1);
        customBlockBody.appendChild(h6Cont);
        customBlockBody.appendChild(p2);
        customBlockBody.appendChild(p3);
        customBlockBody.appendChild(dFlexContainer);

        customBlock.appendChild(customBlockBody);

        const donateButton = document.createElement("a");
        donateButton.href = "donate.html";
        donateButton.className = "custom-btn btn";
        donateButton.textContent = "Donate";

        customBlock.appendChild(donateButton);

        customBlockWrap.appendChild(img);
        customBlockWrap.appendChild(customBlock);

        colDiv.appendChild(customBlockWrap);
        currentRow.appendChild(colDiv);

        // Append the row to the container if it's the third organization or the last one
        if (i % 3 === 2 || i === organizacaos.length - 1) {
            container.appendChild(currentRow);
        }
    }
}
