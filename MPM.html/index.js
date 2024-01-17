const open = document.querySelectorAll("#log_btn, .log_btn2");
const close = document.getElementById("close_btn");
const modal = document.getElementById("wrap-content");

open.forEach(element => {
    element.onclick = () => {
        modal.style.display = "flex";
    };
});

close.onclick = () => {
    modal.style.display = "none";
};