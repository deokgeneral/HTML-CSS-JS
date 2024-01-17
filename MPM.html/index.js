const open =document.getElementById("log_btn");
const close =document.getElementById("close_btn");
const modal =document.getElementById("wrap-content");

open.onclick = () =>{
    modal.style.display = "flex";
};
close.onclick = () => {
    modal.style.display = "none";
};