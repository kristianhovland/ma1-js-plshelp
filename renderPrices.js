export function renderPrices(pricesToRender) {
  const resultsContainer = document.querySelector(".container");
  resultsContainer.innerHTML = "";

  pricesToRender.forEach(function (price) {
    resultsContainer.innerHTML += `<div class="price">
                                      <h4>${price.price}</h4>
                                  </div>`;
  });
}
