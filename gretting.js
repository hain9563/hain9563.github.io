const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN); // showing클래스를 추가해서 form이 보이도록 한다.
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); // form 태그에서 showing클래스를 지워서 form이 안보이도록 한다.
  greeting.classList.add(SHOWING_CN); // h4 태그에서 showing클래스를 추가해서
  greeting.innerText = `🖐 HELLO 🖐 ${text}😉`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //user가 없을 때
    askForName();
  } else {
    //user가 있을 때 form은 없애고 input으로 들어온 사용자를 greeting하는 문구를 띄움
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
