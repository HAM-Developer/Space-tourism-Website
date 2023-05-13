async function populate() {
    const response = await fetch('http://127.0.0.1:5500/data.json');
    const webData = await response.json();
    showData(webData)
    showCrew(webData)
}
function showData(data) {
    const technology = data.technology
    const imgTech = document.querySelector('.tech_img')
    const secTech = document.querySelector('.sections_tech')
    const techBtn = document.querySelectorAll('.num')
    // secTech.innerHTML = "hello"
    //TECHNOLOGY FUNCTIONALITY
    techBtn.forEach(btn =>
        btn.addEventListener('click', e => {
            if (e.target.dataset.tech === "vehicle") {
                secTech.style.left = '0%'
                imgTech.style.left = '0%'
            }
            else if (e.target.dataset.tech === "spaceport") {
                secTech.style.left = '-100%'
                imgTech.style.left = '-100%'
            }
            else {
                secTech.style.left = '-200%'
                imgTech.style.left = '-200%'
            }
        })
    )
    imgTech.innerHTML = technology.map(data => (
        `<div class="sec1"> 
   <img src="${data.images.landscape}" class="tech1" alt="" />
   </div>                                                      
  `    ))
    secTech.innerHTML = technology.map(data => (
        `   <section class="tech_section">
        <h3>The terminology...</h3>
          <h2>${data.name}</h2>
          <p class="p1">
            ${data.description}
          </p>
        </section>
    ` ))
}
populate()
//MENU
const menu = document.querySelector(".menu");
const hambtn = document.querySelector(".hamburger");
const closebtn = document.querySelector(".close");

hambtn.addEventListener("click", () => {
    menu.classList.add("open_menu");
});
closebtn.addEventListener("click", () => {
    menu.classList.remove("open_menu");
});