function scrollToObject(objectId) {
    object = document.getElementById(objectId);
    object.scrollIntoView({
        behavior: "smooth",
    })
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}