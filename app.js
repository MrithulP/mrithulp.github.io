const toTop= document.querySelector(".back-top")

window.addEventListener("scroll", () => {
    if(pageYOffset > 75){
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})

const burger= document.querySelector(".burger")
const sidebar= document.querySelector(".links")
const links= document.querySelectorAll(".links li a")

burger.addEventListener("click", toggleSidebar)

links.forEach(link => {
    link.addEventListener("click", toggleSidebar)
})

function toggleSidebar(){
    sidebar.classList.toggle("show")
}

const checkbox = document.getElementById('checkbox');

// On load, apply dark theme by default
document.body.classList.add('dark-theme');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
});


