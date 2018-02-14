for(var order = document.querySelectorAll(".product-card__order"),
  popup = document.querySelector(".popup__form"),
  overlay = document.querySelector(".popup__overlay"),
  i=0;i<order.length;i++)

  order[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__form--opened");
    overlay.classList.add("popup__overlay--opened");
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup__form--opened")) {
      popup.classList.remove("popup__form--opened");
      overlay.classList.remove("popup__overlay--opened")
    }
  }
});

overlay.addEventListener("click", function() {
  if (popup.classList.contains("popup__form--opened")) {
    popup.classList.remove("popup__form--opened");
    overlay.classList.remove("popup__overlay--opened");
  }
});
