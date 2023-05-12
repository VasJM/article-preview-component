const button = document.querySelector(".share-btn");
const footer = document.querySelector(".card_footer");
const author = document.querySelector(".author-state");
const share = document.querySelector(".media-state");
const arrow = document.querySelector(".arrow-down");
const shareIcon = document.querySelector(".share-icon");

const light = "hsl(210, 46%, 95%)";
const dark = "hsl(214, 17%, 51%)"

function changeIconClr(icon, clr) {
    icon.getSVGDocument().getElementById("icon").setAttribute("fill", clr);
}

function changeBtnClr() {   
    button.classList.toggle("btn-bg-color");

    if (!share.classList.contains("hidden")) {
        changeIconClr(shareIcon, light);
    } else {
        changeIconClr(shareIcon, dark)
    };
}

function toggleState() {
    if (window.innerWidth <= 704) {
        author.classList.toggle("hidden");
        share.classList.toggle("hidden");
        footer.classList.toggle("footer-bg-color");
        changeBtnClr();
    }
}

function hoverState() {
    if (window.innerWidth > 704) {
        author.classList.remove("hidden");
        share.classList.toggle("hidden");
        arrow.classList.toggle("hidden");
        changeBtnClr();
    }
}

button.addEventListener("click", toggleState);
button.addEventListener("mouseover", hoverState);
button.addEventListener("mouseout", hoverState);