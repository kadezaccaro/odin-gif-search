const img = document.querySelector("img");
const input = document.querySelector("input");
const form = document.querySelector("form");

async function getGiphy() {
  try {
    const response = await fetch(
      "/.netlify/functions/fetchGiphy?input=" + encodeURIComponent(input.value)
    );

    const gifData = await response.json();

    if (!gifData.data || Object.keys(gifData.data).length === 0) {
      throw new Error("GIPHY responded with an empty data array.");
    }

    img.src = gifData.data.images.original.url;
    img.alt = gifData.data.title;
  } catch (error) {
    alert(error);
  }
}

getGiphy();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getGiphy();
});
