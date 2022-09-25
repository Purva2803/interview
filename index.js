 var object1={

    name :"Ram",
    power:"2500",
    yuga:"treta"

 }

 var object2={

    name:"krishna",
    power :"2325",
    yuga:"dwapar"
 }

 var total = object2.power-object1.power;
 var total1=object1.power-object2.power;

 if(object1.power<object2.power){
    console.log(object2.name, "has more power with", total, "points");
 }else{
    console.log(object1.name, "has less power with ",total1, "points");

 }