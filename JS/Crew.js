async function populate() {
    const response = await fetch('../data.json', {
        credentials: "include"
    });
    const webData = await response.json();
    showData(webData)
    showCrew(webData)
}
function showData(data) {
    const secCrew = document.querySelector('.sections_crew')
    const imgCrew = document.querySelector('.crew_img')
    const dotsBtn = document.querySelectorAll('.dot')
    const crew = data.crew

    //CREW FUNCTIONALITY

    imgCrew.innerHTML = crew.map(data => (
        `<div class="sub_sec">
    <img src="${data.images.webp}" alt="" />
   </div>`
    ))
    secCrew.innerHTML = crew.map(data => (
        `   <section class="crew_section">
    <h3>${data.role}</h3>
    <h2>${data.name}</h2>
    <p class="sub_Sec2">${data.bio}</p>
    </section>
    `
    ))
    dotsBtn.forEach(btn =>
        btn.addEventListener('click', e => {
            console.log(e.target.dataset.crew)
            if (e.target.dataset.crew === "Commander") {
                secCrew.style.left = '0%'
                imgCrew.style.left = '0%'
            }
            else if (e.target.dataset.crew === "Mission Specialist") {
                secCrew.style.left = '-100%'
                imgCrew.style.left = '-100%'
            }
            else if (e.target.dataset.crew === 'Pilot') {
                secCrew.style.left = '-200%'
                imgCrew.style.left = '-200%'
            }
            else {
                secCrew.style.left = '-300%'
                imgCrew.style.left = '-300%'
            }
        })
    )
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
