let image = document.getElementById("qrimage");
let inputtext = document.getElementById("qrtext");

function qrfunction(){
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputtext.value;
    image.style.zIndex = 1;
}
