const img = document.querySelector("img");
const input = document.querySelector("input");
const form = document.querySelector("form");

function getGiphy() {
  fetch(
    "/.netlify/functions/fetchGiphy?input=" + encodeURIComponent(input.value)
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (!response.data || Object.keys(response.data).length === 0) {
        throw new Error("GIPHY responded with an empty data array.");
      }
      img.src = response.data.images.original.url;
      img.alt = response.data.title;
    })
    .catch((error) => {
      alert(error);
      console.error(error);
    });
}

getGiphy();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getGiphy();
});
