// Кнопки активации
let writeUs = document.querySelector(".index-about__link--trigger");
let mapLink = document.querySelector(".index-about__map-link");

// Форма обратной связи + содержимое
let modalFeedback = document.querySelector(".modal--feedback");
let feedbackForm = modalFeedback.querySelector(".modal__form");
let userName = modalFeedback.querySelector("#feedback-name");
let userEmail = modalFeedback.querySelector("#feedback-email");
let userFeedback = modalFeedback.querySelector("#feedback-area");
let feedbackClose = modalFeedback.querySelector(".modal__close");

// Интерактивная карта
let modalMap = document.querySelector(".modal--map");
let mapClose = modalMap.querySelector(".modal__close");

// Товар добавлен в корзину

// Локальное хранилище

let isStorageSupport = true;
let loginStorage = "";
let emailStorage = "";

try {
  loginStorage = localStorage.getItem("login");
  emailStorage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Показываем модальное окно

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

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

// Валидируем форму

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

// Закрываем модальное окно (кнопкой + esc)

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
