let imageIndex = 0;
let imageUrls = [
    "../images/projects/golden.png",
    "../images/projects/s17.jpeg",
];

let changeImage = (step) => {
    imageIndex += step;
    if (imageIndex < 0) {
        imageIndex = imageUrls.length - 1;
    } else if (imageIndex >= imageUrls.length) {
        imageIndex = 0;
    }
    
    let image = document.getElementById("albumcover");
    image.src = imageUrls[imageIndex];
    
}

// let notHidden=document.getElementById("notHidden");
// function DynamicMenu(){
//     notHidden.classList.toggle("nothidden");

// }

