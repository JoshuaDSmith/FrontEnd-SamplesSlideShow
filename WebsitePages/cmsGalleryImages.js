let image1 = "../Canteens/adrien-olichon-ZgREXhl8ER0-unsplash.jpg";
let image2 = "../Canteens/andre-benz-JCjGpD84N0I-unsplash.jpg";
let image3 = "../Canteens/annie-spratt-L0nm-vBylqY-unsplash.jpg";
let image4 = "../Canteens/carlos-lindner-sjBYA8dAw54-unsplash.jpg";

function GalleryFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

let Gallery = [
  { image: image1, alt: "image" },
  { image: image2, alt: "image" },
  { image: image3, alt: "image" },
  { image: image4, alt: "image" },
];

function functieArray() {
  var gallery = document.getElementById("demo");
  for (i = 0; i < Gallery.length; i++) {
    gallery.innerHTML += Gallery[i].image + "<br>";
  }
}
functieArray();
