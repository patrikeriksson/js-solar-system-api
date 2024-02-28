import { getBodies } from "./api.js";

const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");
// Kan man göra en variabel som har .value .trim() och .toLowerCase() och sen använda den ist?

// ÄNDRA X OCH VALIDX
async function handleValidation(x) {
  const planets = await getBodies();
  let validX = false;
  planets.bodies.forEach((planet) => {
    if (planet.name.toLowerCase() == x || planet.latinName.toLowerCase() == x) {
      validX = true;
    }
  });
  return validX;
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Funkade inte att söka med olika stora bokstäver, la till toLowerCase här så funkade det.
  // Jag la också till .trim() här
  const result = await handleValidation(searchInput.value.trim().toLowerCase());
  if (result) {
    // Och .trim() här, verkade som att jag behöver båda
    window.location.href = `planet.html?name=${searchInput.value.trim()}`;
  } else {
    alert(`${searchInput.value} är ingen planet`);
  }
});
