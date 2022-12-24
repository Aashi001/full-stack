const jokecon=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any";

let getjoke=()=>
{
    jokecon.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokecon.textContent= `${item.joke}`;
        jokecon.classList.add("fade");
    });
}
btn.addEventListener("click",getjoke);

getjoke();

