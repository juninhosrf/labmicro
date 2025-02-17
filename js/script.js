function loadComponent(id, file) {
    let basePath = window.location.hostname.includes("github.io") ? "/labmicro/" : "";

    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";
    
    if (window.location.hostname.includes("github.io")) {
        pathPrefix = basePath;
    }

    fetch(pathPrefix + file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${file}: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
    let baseURL = window.location.hostname.includes("github.io") ? "/labmicro/" : "";

    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === "/") {
            link.setAttribute("href", baseURL);
        }
    });

    loadComponent("navbar", baseURL + "pages/navbar.html");
    loadComponent("footer", baseURL + "pages/footer.html");
});
