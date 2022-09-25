const input = document.getElementById('input');
const output=document.getElementById('output');
const green= document.getElementById('green');
const red= document.getElementById('red');
const blue= document.getElementById('blue');

// const int = input.value;


green.addEventListener("click",()=>{
    const int1 = input.value;
    output.style.color="green";
    output.innerText=int1;

});
blue.addEventListener("click",()=>{
    const int1 = input.value;
    output.style.color="red";
    output.innerText=int1;

});
red.addEventListener("click",()=>{
    const int1 = input.value;
    output.style.color="blue";
    output.innerText=int1;

});


