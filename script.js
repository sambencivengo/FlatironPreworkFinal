// const h2 = document.createElement("h2");
// h2.textContent = "Placeholder of JS added content";
// document.querySelector("body").appendChild(h2);

const dead = document.getElementById("stealie");

dead.addEventListener("mouseover", event => {
    document.getElementById("body").style.backgroundImage = "url(images/dancingBears.jpg)";
});

// dead.addEventListener("mouseleave", event => {
//     document.getElementById("body").style.backgroundColor = "rgb(212, 182, 199)";
//   });

//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);