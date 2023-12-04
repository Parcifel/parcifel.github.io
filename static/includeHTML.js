function includeHTML(element, file) {
    let xhttps;

    xhttps = new XMLHttpRequest();
    xhttps.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                element.innerHTML = this.responseText;
            }
            if (this.status == 404) {
                element.innerHTML = "Page not found.";
            }
        }
    }
    xhttps.open("GET", file, true);
    xhttps.send();
}