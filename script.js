function upDate(previewPic) {

    // Check if event triggers
    console.log("Mouse over triggered!");

    // Log alt and src values
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    // Get the div
    let imageDiv = document.getElementById("image");

    // Change text
    imageDiv.innerHTML = previewPic.alt;

    // Change background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}


function undo() {

    let imageDiv = document.getElementById("image");

    // Reset background image
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}