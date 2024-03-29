// Module that adds all the planet information to the planet.html page
import { getBodies } from "./api.js";

// Function that provides a specific planet based on the search parameters of the URL
async function getPlanet() {
  const params = new URLSearchParams(window.location.search);
  const data = await getBodies();

  const planet = data.bodies.find(
    (planet) =>
      planet.name.toLowerCase() === params.get("name").toLowerCase() ||
      planet.latinName.toLowerCase() === params.get("name").toLowerCase()
  );

  // Adds classes to the planet div in planet.html
  switch (planet.name) {
    case "Solen":
      document.querySelector(".planet").classList.add("sun-big");
      break;
    case "Merkurius":
      document.querySelector(".planet").classList.add("mercury-big");
      break;
    case "Venus":
      document.querySelector(".planet").classList.add("venus-big");
      break;
    case "Jorden":
      document.querySelector(".planet").classList.add("earth-big");
      break;
    case "Mars":
      document.querySelector(".planet").classList.add("mars-big");
      break;
    case "Jupiter":
      document.querySelector(".planet").classList.add("jupiter-big");
      break;
    case "Saturnus":
      document.querySelector(".planet").classList.add("saturn-big");
      document.querySelector(".planet-ring").classList.add("saturn-big-ring");
      break;
    case "Uranus":
      document.querySelector(".planet").classList.add("uranus-big");
      break;
    case "Neptunus":
      document.querySelector(".planet").classList.add("neptune-big");
      break;

    default:
      break;
  }

  // Selects the element with the planet-info class and adds new html elements containing the data from the API
  document.querySelector(".planet-info").innerHTML = `
    <h1 class="main-heading">${planet.name}</h1>
    <h2 class="sub-heading">${planet.latinName}</h2>
    <section>
      <p class="planet-content">${planet.desc}</p>
    </section>
    <hr>
    <section class="planet-specs">
      <div>
        <h3 class="planet-sub-heading">OMKRETS</h3>
        <p class="planet-content">${formatThousands(
          planet.circumference
        )} km</p>
      </div>
      <div>
        <h3 class="planet-sub-heading">KM FRÅN SOLEN</h3>
        <p class="planet-content">${formatThousands(planet.distance)} km</p>
      </div>
      <div>
        <h3 class="planet-sub-heading">MAX TEMPERATUR</h3>
        <p class="planet-content">${planet.temp.day}&deg;C</p>
      </div>
      <div>
        <h3 class="planet-sub-heading">MIN TEMPERATUR</h3>
        <p class="planet-content">${planet.temp.night}&deg;C</p>
      </div>
    </section>
    <hr>
    <section>
      <h3 class="planet-sub-heading">MÅNAR</h3>
      <p class="planet-content">${
        planet.moons.length > 0 ? planet.moons.join(", ") : "Saknar månar"
      } </p>
    </section>
  `;
}

// Makes the numbers more readable
function formatThousands(number) {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
}

getPlanet();
