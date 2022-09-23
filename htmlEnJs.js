const h1 = document.querySelector(`h1`);
const p = document.querySelector(`p`);
const parrafito = document.querySelector(`.parrafito`);
const pid = document.querySelector(`#pid`);
const input = document.querySelector(`input`);



//console.log(h1.getAttribute(`class`));
//h1.setAttribute(`class`, `rojo`);

h1.classList.add(`rojo`);
h1.classList.remove(`verde`);

input.value = `1038412544`;


const cat = document.createElement(`img`);
cat.setAttribute(`src`,`https://images.pexels.com/photos/45170/kittens-cat-cat-
puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`);
console.log(cat);

pid.innerHTML = "";
pid.appendChild(cat);