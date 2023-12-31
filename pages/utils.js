function createPage(title, content) {
  let html;

  html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
  html +=
    '<link rel="stylesheet" href="/css/styles.css"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">';

  html += "<title>" + title + "</title></head><body>";

  html += `<header class="mb-5">
    <nav class="navbar navbar-expand-lg">
       <div class="container">
       <a class="navbar-brand" href="/projects">Todos los proyectos</a>
        </button>
        <div id="navbarNav">
        <ul class="navbar-nav">
          
            
          <li class="nav-item">
          <a class="nav-link" href="/projects?section=mobile">Mobile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects?section=landing">LandingPage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects?section=webapp">Web App</a>
        </li>
         <li class="nav-item">
           <a class="nav-link" href="/projects?section=ecommerce">e-Commerce</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="/projects?section=game">Games</a>
         </li>
         </ul>
         </div>
         </div>
    
    
    </nav>
    </header>`;

  html += content;
  html += "</body> </html>";

  return html;
}

function createProjectList(projects) {
  let content = "<ul>";
  for (let i = 0; i < projects.length; i++) {
    content += "<li>" + projects[i].name + "</li>";
  }
  content += "</ul>";
  return content;
}

function isValidId(id) {
  const objectIdRegex = /^[a-f\d]{24}$/i;
  return objectIdRegex.test(id);
}

export { createPage, createProjectList, isValidId };
