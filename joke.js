let joke=document.getElementById('joke');
let joke2=document.getElementById('joke2');
let btn=document.getElementById('btn');
async function getrandomJoke(){
    let url=await fetch('https://official-joke-api.appspot.com/random_joke');
    url=await url.json();
    joke.innerHTML=url.setup+' !';
    joke2.innerHTML=url.punchline;
    console.log(url.setup);
    console.log(url.punchline);
    
}
btn.addEventListener('click',()=>{
    getrandomJoke();
})
