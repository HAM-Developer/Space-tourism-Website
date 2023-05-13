async function populate() {
  const response = await fetch('http://127.0.0.1:5500/data.json');
  const webData = await response.json();
  showData(webData)
}

function showData(data) {
  const destination = data.destinations
  const secDestination = document.querySelector('.sections_destination')
  const buttons = document.querySelectorAll('.destination_menu a')
  const imgDestination = document.querySelector('.destination_img')

  buttons.forEach(btn =>
    btn.addEventListener('click', e => {
      if (e.target.textContent === "Moon") {
        secDestination.style.left = '0%'
        imgDestination.style.left = '0%'
      } else if (e.target.textContent === "Mars") {
        secDestination.style.left = '-100%'
        imgDestination.style.left = '-100%'
      }
      else if (e.target.textContent === 'Europa') {
        secDestination.style.left = '-200%'
        imgDestination.style.left = '-200%'
      } else {
        secDestination.style.left = '-300%'
        imgDestination.style.left = '-300%'
      }
    })
  )
  imgDestination.innerHTML = destination.map(data => (
    `  <div class="sub_sec">
   <img src="${data.images.webp}" alt="" />
  </div>`
  ))
  secDestination.innerHTML = destination.map(data => (`<section class="section_dest">
    <div class="sub_sec1">
      <h1>${data.name}</h1>
      <p class="sub_Sec2">
      ${data.description}
      </p>
     <div class="distance">
         <div class="dis_sec">
          <p class="dis1">Avg. distance</p>
           <p class="dis2">${data.distance}</p>
         </div>
         <div class="dis_sec">
           <p class="dis1">Est. travel time</p>
           <p class="dis2">${data.travel}</p>
       </div>
       </div>
     </div>
   </section>`
  ))
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
