var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs")
& navMain.classList.remove("main-nav--opened")
& navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  }
  else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
})

if (document.getElementById("product__order") || document.getElementById("modal-block")) {
  var popup = document.querySelector(".modal__content");
  var popupBack = document.querySelector(".modal");
  var btnOrder = document.querySelector(".button--order");

  btnOrder.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBack.classList.add("modal--show");
    popup.classList.add("modal--show");
  })

  if (document.getElementById("product__order")) {
    var cart = document.querySelector(".product__order");

    cart.addEventListener("click", function(evt) {
      evt.preventDefault();
      popupBack.classList.add("modal--show");
      popup.classList.add("modal--show");
    })
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
        popupBack.classList.remove("modal--show")
      }
    }
  });

  popupBack.addEventListener("click", function(event) {
    if (event.target === this) {
      popupBack.classList.remove("modal--show");
      popup.classList.remove("modal--show");
    }
  });
}
