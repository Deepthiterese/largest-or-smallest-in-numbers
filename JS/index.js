function abc(){

var a=document.getElementById("large").value

var b=document.getElementById("small").value

if(a>b)
{
    document.getElementById("result").innerHTML=(`${a}`)+" is Large number."
}
else{
    document.getElementById("result").innerHTML=(`${b}`)+" is Large number."
}


}