function modal() {
  const overlay = document.getElementById("overlay")
  const close = document.getElementsByClassName("btn-close")[0];
  const btn = document.querySelector(".btn");
  

  btn.onclick = function() {
    overlay.classList.add('show')
  }
  
  close.onclick = function() {
    overlay.classList.remove('show')
  }

  window.onclick = function(event) {
    if (event.target == overlay) {
      overlay.classList.remove('show')
    }
  }
}

modal();


const click = document.getElementsByClassName("number-clicks")[0];
const btn = document.querySelector(".btn");
const create = document.createElement("span");
const reset = document.querySelector(".btn-reset");

let counter = 0;

window.onload = () => {
  if (counter = localStorage.getItem("counter")){
    result = JSON.parse(localStorage.getItem("counter"));
    } 
    else {
      result = 0;
    }
  click.innerHTML = counter;
};

function clickCount() {
  counter++   
  click.innerText = counter + ` times`;
  localStorage.setItem('counter', JSON.stringify(counter));

  if (counter > 5) {
    create.classList.add("button");
    create.innerHTML = `Reset!`;
    const spanReset = document.querySelector(".btn-reset");
    spanReset.appendChild(create);
  }   
} 

btn.addEventListener("click", clickCount);

function clearCounter() { 
  click.innerHTML = `0 times`; 
  window.location.reload(localStorage.clear('counter'));   
}

reset.addEventListener("click", clearCounter);