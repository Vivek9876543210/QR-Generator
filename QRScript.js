let input = document.querySelector("#input");
let button = document.querySelector("button");
let QRimg = document.querySelector("#QRimg");
let txt=document.querySelector("p");
function QRGenerator() {
    
    if (input.value=== "") {
        alert("please Enter valid URL");
        return;
        input.focus();

    }
    else {
        QRimg.setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value);
         txt.innerHTML=input.value;
         input.focus();
         input.value="";
         // console.log(txt.value);
         
         
    }
}

button.addEventListener("click",QRGenerator);
