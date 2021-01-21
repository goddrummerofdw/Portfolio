document.addEventListener("DOMContentLoaded", init);

function init() {
  let query = window.matchMedia("(max-device-width: 768px)");
  if (query.matches) {
    let elem = document.createElement("div");
    let x = document.getElementsByClassName("box5")[0];
    x.appendChild(elem);
    let parent = document.getElementsByClassName("box3")[0];
    let child = document.getElementsByClassName("switch")[0];
    parent.replaceChild(elem, child);
    x.appendChild(child);
  }
}
