function check() {
    let dark = document.getElementById("dark").checked;
    if (dark) {
        document.getElementById("body").className = "body dark"
    } else {
        document.getElementById("body").className = "body"
    }
}