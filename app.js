const btnElement = document.querySelector(".slider")
const H2Element = document.querySelector(".card2-h2")
const H2TabElement = document.querySelectorAll(".card1-h2")

let clicEtat = false;

btnElement.addEventListener('click', () => {
    if (clicEtat) {
        H2Element.innerHTML = "$24.99";
        H2TabElement[0].innerHTML = "$19.99";
        H2TabElement[1].innerHTML = "$39.99";
    } else {
        H2Element.innerHTML = "$249.99";
        H2TabElement[0].innerHTML = "$199.99";
        H2TabElement[1].innerHTML = "$399.99";
    }

    clicEtat = !clicEtat;
});
