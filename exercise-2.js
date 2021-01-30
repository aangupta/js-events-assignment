const btn_minus = document.querySelector("#minus");
btn_minus.addEventListener("click", (event)=>{
  let val = parseInt(document.querySelector("#myNumber").value);
  val--;
  document.querySelector("#myNumber").value = val;


});

const btn_plus = document.querySelector("#plus");
btn_plus.addEventListener("click", (event)=>{
    let val = parseInt(document.querySelector("#myNumber").value);
    val++;
    document.querySelector("#myNumber").value = val;
  
  
  });