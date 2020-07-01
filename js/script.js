// Кнопки активации
var writeUs = document.querySelector(".index-about__link--trigger");
var mapLink = document.querySelector(".index-about__map-link");
var buyButtons = document.querySelectorAll(".card__buy");

// Форма обратной связи + содержимое
var modalFeedback = document.querySelector(".modal--feedback");
if (modalFeedback) {
  var feedbackForm = modalFeedback.querySelector(".modal__form");
  var userName = modalFeedback.querySelector("#feedback-name");
  var userEmail = modalFeedback.querySelector("#feedback-email");
  var userFeedback = modalFeedback.querySelector("#feedback-area");
  var feedbackClose = modalFeedback.querySelector(".modal__close");
}

// Интерактивная карта
var modalMap = document.querySelector(".modal--map");
if (modalMap) {
  var mapClose = modalMap.querySelector(".modal__close");
}

// Товар добавлен в корзину
var modalNotification = document.querySelector(".modal--cart");
var notificationClose = modalNotification.querySelector(".modal__close");

// Локальное хранилище
var isStorageSupport = true;
var loginStorage = "";
var emailStorage = "";

try {
  loginStorage = localStorage.getItem("login");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Показываем модальное окно
for (var i = 0; i < buyButtons.length; i ++) {
  var buyButton = buyButtons[i];
  buyButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalNotification.classList.add("modal-show");
  });
}

if (modalMap) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });
}

if (modalFeedback) {
  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    if (emailStorage || emailStorage) {
      userName.value = loginStorage;
      userEmail.value = emailStorage;
      userFeedback.focus()
    } else {
      userName.focus()
    }
  });
}

// Валидируем форму
if (modalFeedback) {
  feedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userFeedback.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", userName.value);
        localStorage.setItem("email", userEmail.value);
      }
    }
  });
}

// Закрываем модальное окно (кнопкой + esc)
notificationClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalNotification.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalNotification.classList.contains("modal-show")) {
      evt.preventDefault();
      modalNotification.classList.remove("modal-show");
    }
  }
});

if (modalMap) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
      }
    }
  });
}

if (modalFeedback) {
  feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFeedback.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
      }
    }
  });
}
