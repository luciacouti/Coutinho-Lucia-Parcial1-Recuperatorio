import { createPage } from "../pages/utils.js";

function createProjectListPage(projects) {
  let html = '<div class="container">';
  html += '<div class="row d-flex justify-content-between">';
  html += '<div class="col-6 px-5"><h1>Lista de Proyectos</h1></div>';

  html += "</div>"; // row

  html += '<ul class="row">';

  for (let i = 0; i < projects.length; i++) {
    html += `
    
     <div class="col-6 col-md-4 col-lg-3 p-3">
     <div class="card">
     
      <img src="${projects[i].img}" alt="${projects[i].name}" class="card-img-top">
         <div class="card-body p-4">
                <p class="card-title">${projects[i].name}</p>
                <p class="card-categoria">${projects[i].section}</p>
                               <p class="card-text">${projects[i].description}</p>
                <p class="card-text">Tecnologías usadas: `;
    for (let t = 0; t < projects[i].technologies.length; t++) {
      html += `${projects[i].technologies[t]}, `;
    }

    html += `</p>
                
               
                

                <a href="${projects[i].link}">
                <btn class="btn btn-vermas w-100 my-2">Ir a GitHub</btn> 
                </a>
               

               
         </div>
         
    </div>
    </div>
    
    `;
  }

  html += "</ul>";
  html += "</div>";

  return createPage("Proyectos", html);
}

export { createProjectListPage, createPage };
