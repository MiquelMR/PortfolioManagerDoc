let pageDir = "pages/";
let controllerTables = "controller_tables/";
let versionDir = "version_history/";

window.onload = function () {
   loadContent('overview');
};


function loadContent(page) {
    let fullpath = pageDir + page + ".html";
    console.log(fullpath);
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("content").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}

function loadVersion(page) {
    let fullpath = versionDir + page + ".html";
    console.log(fullpath);
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("version").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}

function loadControllerTable(page) {
    let fullpath = controllerTables + page + ".html";
    console.log(fullpath);
    fetch(fullpath)
        .then(response => response.text())
        .then(data => document.getElementById("controller_table").innerHTML = data)
        .catch(error => console.error("Error loading content:", error));
}