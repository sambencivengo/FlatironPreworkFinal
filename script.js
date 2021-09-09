// const h2 = document.createElement("h2");
// h2.textContent = "Placeholder of JS added content";
// document.querySelector("body").appendChild(h2);

const dead = document.getElementById("stealie");

const sidenav = document.getElementById("sidenav");
//working hover script//
dead.addEventListener("mouseenter", event => {
    sidenav.style.backgroundImage = "url(/Users/sambencivengo/Development/code/Prework_Final_Project/images/f756cbde022ceaa11d1c4b14ee3f8aa7.jpg)";
});

dead.addEventListener("mouseleave", event => {
    sidenav.style.backgroundImage = null;
});

// if (event.type == 'mouseout') {
//     event.target.style.background = ''
//   }
// }