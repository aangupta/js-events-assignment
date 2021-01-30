const val = document.querySelector("#inputText");
val.addEventListener("input",(event)=>{
    document.querySelector("#inputTextLength").innerHTML = document.querySelector("#inputText").value.length;


});