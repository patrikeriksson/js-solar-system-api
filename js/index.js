import { getBodies } from "./api.js";

const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");

// Search validation
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

// Search function
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = await handleValidation(searchInput.value.trim().toLowerCase());
  if (result) {
    window.location.href = `planet.html?name=${searchInput.value.trim()}`;
  } else {
    alert(`${searchInput.value} är ingen planet`);
  }
});

// Changes the main- and sub-heading to show the planets name and latin name while hovering, then changes back on mouse-out
const mainHeading = document.querySelector(".main-heading");
const subHeading = document.querySelector(".sub-heading");

const sun = document.querySelector(".sun");
sun.addEventListener("mouseover", () => {
  mainHeading.textContent = "SOLEN";
  subHeading.textContent = "SOLIS";
});
sun.addEventListener("mouseout", handleMouseOut);

const mercury = document.querySelector(".mercury");
mercury.addEventListener("mouseover", () => {
  mainHeading.textContent = "MERKURIUS";
  subHeading.textContent = "MERCURIALIS";
});
mercury.addEventListener("mouseout", handleMouseOut);

const venus = document.querySelector(".venus");
venus.addEventListener("mouseover", () => {
  mainHeading.textContent = "VENUS";
  subHeading.textContent = "VENUS";
});
venus.addEventListener("mouseout", handleMouseOut);

const earth = document.querySelector(".earth");
earth.addEventListener("mouseover", () => {
  mainHeading.textContent = "JORDEN";
  subHeading.textContent = "TELLUS";
});
earth.addEventListener("mouseout", handleMouseOut);

const mars = document.querySelector(".mars");
mars.addEventListener("mouseover", () => {
  mainHeading.textContent = "MARS";
  subHeading.textContent = "MARS";
});
mars.addEventListener("mouseout", handleMouseOut);

const jupiter = document.querySelector(".jupiter");
jupiter.addEventListener("mouseover", () => {
  mainHeading.textContent = "JUPITER";
  subHeading.textContent = "LOVIS";
});
jupiter.addEventListener("mouseout", handleMouseOut);

const saturn = document.querySelector(".saturn");
saturn.addEventListener("mouseover", () => {
  mainHeading.textContent = "SATURNUS";
  subHeading.textContent = "SATURNUS";
});
saturn.addEventListener("mouseout", handleMouseOut);

const uranus = document.querySelector(".uranus");
uranus.addEventListener("mouseover", () => {
  mainHeading.textContent = "URANUS";
  subHeading.textContent = "URANUS";
});
uranus.addEventListener("mouseout", handleMouseOut);

const neptune = document.querySelector(".neptune");
neptune.addEventListener("mouseover", () => {
  mainHeading.textContent = "NEPTUNUS";
  subHeading.textContent = "NEPTUNUS";
});
neptune.addEventListener("mouseout", handleMouseOut);

function handleMouseOut() {
  mainHeading.textContent = "SOLSYSTEMET";
  subHeading.textContent = "SOLARIS";
}
