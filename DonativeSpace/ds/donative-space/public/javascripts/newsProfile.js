window.onload = async function () {
    try {
        

        const userProfile = await requestProfile();
        let resN = await requestNoticias();
        const user = userProfile.user;
        

        document.getElementById('username').innerHTML ='<i class="fas fa-solid fa-user fa-fw"></i>&nbsp' + user.name;
        document.getElementById('points').innerHTML ='<i class="fas fa-solid fa-coins fa-fw"></i>&nbsp' + user.points;
        


   
        populateNoticias(resN.noticias);
 

     } catch (err) {
        console.log(err);
       // alert("Something went wrong!")
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


function populateNoticias(noticias) {
    let container = document.getElementById("noticias-container");
  
    // Slice the array to only include the first 2 items
    noticias.sort((a, b) => new Date(b.noticia_date) - new Date(a.noticia_date));
  
    for (let i = 0; i < noticias.length; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-lg-7 col-12");
  
        let newsBlock = document.createElement("div");
        newsBlock.setAttribute("class", "news-block");
  
        let newsBlockTop = document.createElement("div");
        newsBlockTop.setAttribute("class", "news-block-top");
  
        let imageLink = document.createElement("a");
        imageLink.href = "news-detail.html";
  
        let img = document.createElement("img");
        img.src = noticias[i].noticia_img;
        img.setAttribute("class", "news-image img-fluid");
        img.alt = "";
  
        imageLink.appendChild(img);
  
        let newsCategoryBlock = document.createElement("div");
        newsCategoryBlock.setAttribute("class", "news-category-block");
  
        // Assuming you have an array of categories in noticias[i].categories
        /*
        for (let category of noticias[i].categories) {
            let categoryLink = document.createElement("a");
            categoryLink.href = "#";
            categoryLink.setAttribute("class", "category-block-link");
            categoryLink.textContent = category;
            newsCategoryBlock.appendChild(categoryLink);
        }
        */
  
        newsBlockTop.appendChild(imageLink);
        newsBlockTop.appendChild(newsCategoryBlock);
  
        let newsBlockInfo = document.createElement("div");
        newsBlockInfo.setAttribute("class", "news-block-info");
  
        let newsBlockDate = document.createElement("div");
        newsBlockDate.setAttribute("class", "d-flex mt-2");
  
        let dateParagraph = document.createElement("p");
        dateParagraph.innerHTML = `<i class="bi-calendar4 custom-icon me-1"></i>${formatDate(noticias[i].noticia_date)}`;
  
        newsBlockDate.appendChild(dateParagraph);
  
        let authorBlock = document.createElement("div");
        authorBlock.setAttribute("class", "news-block-author mx-5");
  
        let authorParagraph = document.createElement("p");
        authorParagraph.innerHTML = `<i class="bi-person custom-icon me-1"></i> ${noticias[i].org_name}`;
  
        authorBlock.appendChild(authorParagraph);
  
        newsBlockDate.appendChild(authorBlock);
  
        let titleBlock = document.createElement("div");
        titleBlock.setAttribute("class", "news-block-title mb-2");
  
        let titleLink = document.createElement("h4");
        let titleAnchor = document.createElement("a");
        titleAnchor.href = "news-detail.html";
        titleAnchor.setAttribute("class", "news-block-title-link");
        titleAnchor.textContent = noticias[i].noticia_title;
  
        titleLink.appendChild(titleAnchor);
        titleBlock.appendChild(titleLink);
  
        let bodyBlock = document.createElement("div");
        bodyBlock.setAttribute("class", "news-block-body");
  
        let bodyParagraph = document.createElement("p");
        bodyParagraph.textContent = noticias[i].noticia_texto;
  
        bodyBlock.appendChild(bodyParagraph);
  
        newsBlockInfo.appendChild(newsBlockDate);
        newsBlockInfo.appendChild(titleBlock);
        newsBlockInfo.appendChild(bodyBlock);
  
        newsBlock.appendChild(newsBlockTop);
        newsBlock.appendChild(newsBlockInfo);
  
        colDiv.appendChild(newsBlock);
        container.appendChild(colDiv);
    }
  }