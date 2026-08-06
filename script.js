
for (let i = 0; i < 500; i++) {
    let star = document.createElement("div");

    star.className = "star";

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    star.style.left = x + "px";
    star.style.top = y + "px";

    let size = Math.random() * 6 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    document.body.append(star);

}
  let specialStar = document.createElement("div");
  specialStar.className = "special-star";
  specialStar.style.left = window.innerWidth / 2 + "px";
  specialStar.style.top = window.innerHeight / 0 + "px";   
  document.body.append(specialStar);