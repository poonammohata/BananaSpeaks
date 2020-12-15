var btnTranslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#text-input");
var textTranslated=document.querySelector("#text-translated");

var url="https://api.funtranslations.com/translate/minion";

function urlUpdate(text){
    var urlExtension=url+"?text="+text;
    console.log(urlExtension)
    return urlExtension;
}
function errorHandler(error){
    console.log("error occured "+error);
    alert("there is some problem at server,checkafter some time");
}
btnTranslate.addEventListener("click",function clickEventHandler(){
    var textInputValue=textInput.value;
    fetch(urlUpdate(textInputValue))
    .then(function responseConverter(response){
        return response.json();
    })
    .then(function jsonOutput(json){
        var texttrans=json.contents.translated
        textTranslated.innerHTML=texttrans;
    })
    .catch(errorHandler)
})
