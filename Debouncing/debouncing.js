let input = document.getElementById("textbox");
let defaultout = document.getElementById("default");
let debounceout = document.getElementById("debounce");

const updateDebounceText = debounce((text) => {
  debounceout.textContent = text;
}, 1000);

document.addEventListener("input", (e) => {
  defaultout.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

function debounce(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(args);
    }, delay);
  };
}
