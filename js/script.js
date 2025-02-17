function loadComponent(id, file) {
    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";

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
    loadComponent("navbar", "pages/navbar.html");
    loadComponent("footer", "pages/footer.html");
});
