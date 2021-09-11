// const h2 = document.createElement("h2");
// h2.textContent = "Placeholder of JS added content";
// document.querySelector("body").appendChild(h2);

const deadSkull = document.getElementById("stealie");

const sidenav = document.getElementById("sidenav");
//working hover script//
deadSkull.addEventListener("mouseenter", event => {
    sidenav.style.backgroundImage = "url(images/bears.jpg)";
});

deadSkull.addEventListener("mouseleave", event => {
    sidenav.style.backgroundImage = null;
});

// if (event.type == 'mouseout') {
//     event.target.style.background = ''
//   }
// }