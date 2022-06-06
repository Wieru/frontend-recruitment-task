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