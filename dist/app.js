let quotes=document.querySelector("quote");
let person=document.querySelector("#guy");
let btn=document.querySelector('#btn');

const apiurl= 'https://api.quotable.io/quotes/random';




function getQuote(){
  fetch(apiurl)
  .then((data)=> data.json())
  .then((item)=> {
    const quote = item[0];
    console.log(quote.content);
    quotes.innerText = quote.content;
    person.innerText = quote.author;
    
  });;
  
};

window.addEventListener("load",getQuote);
btn.addEventListener("click", getQuote);