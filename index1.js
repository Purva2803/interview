const h1=document.querySelector('#h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const input = document.getElementById('input');
const output = document.getElementById('output');



h1.addEventListener("click",function (){
    const value=input.value;
    const outputH1 = document.createElement("h1")
    // output.innerHTML=`<h1>${value}</h1>`
    outputH1.innerText=value;
    output.appendChild (outputH1);
})
h2.addEventListener("click",()=>{
    const value=input.value;
    output.innerHTML=`<h2>${value}</h2>`

})
h3.addEventListener("click",()=>{
    const value=input.value;
    output.innerHTML=`<h3>${value}</h3>`

})