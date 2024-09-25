let $ = document;
let servicesLi = $.querySelector("#servicesLi");
let servicesBar = $.querySelector("#servicesBar");
let servicesBarToggle = false;
let servicesIcon = $.querySelector("#servicesIcon");
servicesLi.addEventListener("click", function () {
  if (!servicesBarToggle) {
    servicesBar.classList =
      "text-white bg-blue-800 bg-opacity-50 absolute w-28 -right-[20px] rounded-2xl flex flex-col items-center leading-8 p-3 m-2 hover:bg-white hover:text-blue-800";
    servicesIcon.classList = "size-4 inline rotate-180";
    servicesBarToggle = true;
  } else {
    servicesBar.classList =
      "text-white bg-blue-600 absolute w-28 -right-[20px] rounded-2xl hidden flex-col items-center leading-8 p-3 m-2 hover:bg-white hover:text-blue-800";
    servicesIcon.classList = "size-4 inline";
    servicesBarToggle = false;
  }
});
// Array of image URLs
const images = [
  "assets/images/photo_2024-09-25_01-22-12.jpg",
  "assets/images/home2.jpg",
  "assets/images/photo_2024-09-25_16-43-58.jpg",
];

let currentIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
  const section = document.getElementById("home");
  currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
  section.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change background every 5 seconds (5000 ms)
setInterval(changeBackgroundImage, 5000);

// // Slider Functionality
// const slider = $.getElementById("slider");
// const slides = slider.children.length;
// let currentIndex = 0;

// $.getElementById("next").addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % slides;
//   updateSlider();
// });

// $.getElementById("prev").addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + slides) % slides;
//   updateSlider();
// });

// function updateSlider() {
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }
