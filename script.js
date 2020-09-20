import { renderPrices } from "./renderPrices.js";
import { searchPrices } from "./searchPrices.js";
import { displayMessage } from "./displayMessage.js";

const proxy = "https://cors-anywhere.herokuapp.com/";
const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

const corsFix = proxy + url;

async function getPrices() {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const data = result.data;

    renderPrices(data);
    searchPrices(data);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".container");
  }
}

getPrices();
