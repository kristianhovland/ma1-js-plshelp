import { renderPrices } from "./renderPrices.js";

export function searchPrices(prices) {
  const search = document.querySelector(".search");
  search.addEventListener("keyup", function (event) {
    //...
  });

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredPrices = prices.filter(function (price) {
      if (price.prices.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    renderPrices(filteredPrices);
  };
}
