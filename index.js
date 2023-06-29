var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

// modal open function

var openModal1 = () => {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

var closeModal1 = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}