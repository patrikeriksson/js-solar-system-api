// const BASE_URL = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com";
// const API_KEY = "solaris-2ngXkR6S02ijFrTP";
// const GET_PLANETS = "bodies";

import { getBodies } from "./api";

const searchInput = document.querySelector(".search-input");
const searchForm = document.querySelector(".search-form");
const planets = await getBodies();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(planets);
  console.log(searchInput.value);
  searchInput.value;
});

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase;

  // data.bodies.name.toLowerCase().includes(value) ||
  //   data.bodies.latinName.toLowerCase().includes(value);
});

// .filter ????
// .map ????

// bodies.filter((planet) => {
//   planet.name == inputSearch
// });
