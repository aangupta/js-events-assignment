const encodeBtn = document.querySelector("#encode");
encodeBtn.addEventListener("click",()=>{
    let urlText = document.getElementById("urlValue").value;
    console.log(urlText);
    document.getElementById("result").value= encodeURIComponent(urlText);
   
});



const decodeBtn = document.querySelector("#decode");
decodeBtn.addEventListener("click",()=>{
    let urlText = document.getElementById("urlValue").value;
    console.log(urlText);
    document.getElementById("result").value= decodeURIComponent(urlText);
});