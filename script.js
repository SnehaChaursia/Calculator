const input=document.getElementById("inputbox");
function appendvalue(value){
    input.value+=value;
}
function clearresult(){
    input.value="";
}
function clear() {
   input.value=input.value.slice(0,-1);
   
}
function calculate(){
    try{

        input.value=eval(input.value);
    }
    catch{
        input.value="error";
    }
}