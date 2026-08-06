
 let bar = document.querySelector(".bar");

for (let i = 0; i < 24; i++) {
    let segment = document.createElement("div");
    segment.className = "segment";

    bar.append(segment);

}