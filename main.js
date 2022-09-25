const input=document.querySelector("#input");
const submit=document.querySelector("#submit");
const output = document.querySelector("#output");
 
function lengthchecker(){
if(input.value.length>15){
  output.innerText ="you have reached your limit";
}else{
    output.innerText="success";
}
}

submit.addEventListener("click", lengthchecker);