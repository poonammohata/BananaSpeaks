var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var textTranslated=document.querySelector("#text-translated");


btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log(textInput.value);
    textTranslated.innerText="hello i am poonam";
})
