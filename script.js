
const quote= document.querySelector(".quote");
const person= document.querySelector(".person");
const btn = document.querySelector("#new-quote");

const api = "https://api.quotable.io/random"

async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
console.log(data);
quote.innerHTML=data.content;
person.innerHTML=data.author;
}
getquote(api);

btn.addEventListener("click",function(){
    getquote(api);
})