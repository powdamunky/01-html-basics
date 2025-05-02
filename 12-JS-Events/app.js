console.log("Hello World!");

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", function (event) {
    console.log(event)
});

button.addEventListener("mouseover", function (mouseover) {
    console.log(mouseover);
});