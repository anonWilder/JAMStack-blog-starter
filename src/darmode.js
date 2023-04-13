// const toggleSwitch = document.getElementById('toggle-btn');
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark'); // save the dark theme to local storage
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light'); // save the light theme to local storage
//     }    
// }
// toggleSwitch.addEventListener('change', switchTheme, false);

// // Check for saved theme preference and set it accordingly
// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    toggle.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    document.querySelector(".hero-image-wrap").style.display = "none";
  } else {
    toggle.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
    document.querySelector(".hero-image-wrap").style.display = "block";
  }
});