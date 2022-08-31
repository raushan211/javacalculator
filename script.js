function display(x){
  a=document.getElementById("display").value
   c=a+x
   document.getElementById("display").value=c
    
}
function calculate(){
    a=document.getElementById("display").value;
    console.log(eval(a))
    document.getElementById("display").value=eval(a)
}
function ac(){
    x=document.getElementById("display").value="";
    return x;
}