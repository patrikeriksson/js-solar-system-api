import { getBodies } from "./api.js";

const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");

async function handleValidation(input) {
  const planets = await getBodies();
  let validInput = false;
  planets.bodies.forEach((planet) => {
    if (
      planet.name.toLowerCase() == input ||
      planet.latinName.toLowerCase() == input
    ) {
      validInput = true;
    }
  });
  return validInput;
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = await handleValidation(searchInput.value.trim().toLowerCase());
  if (result) {
    window.location.href = `planet.html?name=${searchInput.value.trim()}`;
  } else {
    alert(`${searchInput.value} är ingen planet`);
  }
});
