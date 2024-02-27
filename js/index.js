import { getBodies } from "./api.js";

const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");

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
  const result = await handleValidation(searchInput.value);
  if (result) {
    window.location.href = `planet.html?name=${searchInput.value}`;
  } else {
    alert(`${searchInput.value} är ingen planet`);
  }
});
