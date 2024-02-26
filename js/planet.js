import { getBodies } from "./api";

async function getPlanet() {
  const data = await getBodies();
  const params = new URLSearchParams(window.location.search);

  data.bodies.forEach((planet) => {
    if (planet.name == params.get("name")) {
      switch (planet.name) {
        case "Solen":
          // Ändra sun classen till en ny class för planeterna
          // temp classen till css variabel
          document.querySelector(".sun").classList.add("temp");
          break;

        default:
          break;
      }
      console.log(data.bodies);
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
              <p class="planet-content">${planet.circumference} km</p>
            </div>
            <div>
              <h3 class="planet-sub-heading">KM FRÅN SOLEN</h3>
              <p class="planet-content">${planet.distance} km</p>
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
              planet.moons.length > 0 ? planet.moons : "Saknar månar"
            } </p>
          </section>
        `;
      //   document.querySelector(".main-heading").textContent = planet.name;
    }
  });
}

getPlanet();
