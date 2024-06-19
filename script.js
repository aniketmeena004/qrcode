let image = document.getElementById("qrimage");
let inputtext = document.getElementById("qrtext");

function qrfunction(){
    if(inputtext.value === ""){
        alert("Cannot Generate QR for empty Value")
    }
    else{
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ inputtext.value;
        image.style.zIndex = 1;
    }
}
inputtext.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        qrfunction();
    }
})
