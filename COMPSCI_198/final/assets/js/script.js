

// function toggleteas() {
//     container.colordots.classList.toggle("hidden");
//     container.discriptions.classList.toggle("hidden");

// }

function toggleColor(color) {
    document.getElementById("choice").classList.toggle("hidden");
    Array.prototype.forEach.call(document.getElementsByClassName(color), function(el) {
        el.classList.toggle("hidden");
    });

}


document.getElementById("white_color").onmouseover = () => { toggleColor("white") };
document.getElementById("green_color").onmouseover = () => { toggleColor("green") };
document.getElementById("black_color").onmouseover = () => { toggleColor("black") };
document.getElementById("chamomile_color").onmouseover = () => { toggleColor("chamomile") };
document.getElementById("peppermint_color").onmouseover = () => { toggleColor("peppermint") };

document.getElementById("white_color").onmouseout = () => { toggleColor("white") };
document.getElementById("green_color").onmouseout = () => { toggleColor("green") };
document.getElementById("black_color").onmouseout = () => { toggleColor("black") };
document.getElementById("chamomile_color").onmouseout = () => { toggleColor("chamomile") };
document.getElementById("peppermint_color").onmouseout = () => { toggleColor("peppermint") };



new TypeIt("#choice", {
    speed: 5,
    loop: false,
    afterComplete: function (step, instance) {
        instance.destroy();
    }
}).go();




