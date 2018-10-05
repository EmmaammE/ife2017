if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", doSomething);
} else { // `DOMContentLoaded` already fired
    doSomething();
}

function doSomething() {
    document.querySelector('.button').addEventListener('click', function () {
        document.querySelector('.title-container').classList.toggle('click');
    })
}