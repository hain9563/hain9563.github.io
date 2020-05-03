const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS); //현재 클래스가 CLICKED CLASS를 포함하고 있는지
    if (hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

