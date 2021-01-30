const hexText = document.querySelector("#text");

hexText.addEventListener("input",()=>{
    document.querySelector("#box").style.backgroundColor= hexText.value;

});