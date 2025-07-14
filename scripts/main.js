document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = (id, url) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    };

    loadComponent("header-container", "components/header.html");
    loadComponent("introduccion-container", "components/introduccion.html");
    loadComponent("filosofia-container", "components/filosofia.html");
    loadComponent("programacion-container", "components/programacion.html");
    loadComponent("servicios-container", "components/servicios.html");
    loadComponent("footer-container", "components/footer.html");
});
