//falsy values
//0
//false
//'' or ""
//null
//NaN
//undefined
//truthy values
//" "
//"0"
//{}
//[]

let name = 12;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}