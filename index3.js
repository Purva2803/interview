const button = document.getElementById('button');
const output= document.getElementById('output');

output.innerText="loading";

button.addEventListener('click',()=>{
    if(output.innerText==="loading"){
    output.innerText="";
    }else{
     output.innerText="loading";
    }
})