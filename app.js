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



const textArray = ["Hi, I'm Mrithul P", "A senior High Student"];
let index = 0;
let textPosition = 0;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
  const currentText = textArray[index];

  if (textPosition < currentText.length) {
    typingTextElement.innerHTML += currentText.charAt(textPosition);
    textPosition++;
    setTimeout(typeText, 100); // Adjust typing speed here (100ms)
  } else {
    setTimeout(() => {
      textPosition = 0;
      index = (index + 1) % textArray.length; // Loop through texts
      typingTextElement.innerHTML = ""; // Clear the text
      typeText(); // Start typing next text
    }, 2000); // Time to wait before typing the next text (2000ms)
  }
}

// Start typing effect when the page loads
window.onload = typeText;
