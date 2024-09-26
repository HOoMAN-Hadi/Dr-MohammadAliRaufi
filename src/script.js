let $ = document;
let servicesLi = $.querySelector("#servicesLi");
let servicesBar = $.querySelector("#servicesBar");
let servicesBarToggle = false;
let servicesIcon = $.querySelector("#servicesIcon");
let servicesBarIcon = $.querySelector("#servicesBarIcon");
let beutyServ = $.querySelector("#beutyServ");
let beutyServBar = $.querySelector("#beutyServBar");
let beutyServicesToggle = false;
let medicalServ = $.querySelector("#medicalServ");
let aboutLi = $.querySelector("#aboutLi");
let aboutBar = $.querySelector("#aboutBar");
let aboutBarToggle = false;
let aboutIcon = $.querySelector("#aboutIcon");
//پایان تعریف متغیر ها 

// Toggle the servicesBar when servicesLi is clicked
servicesLi.addEventListener("click", function (event) {
  // Stop event propagation to prevent the document body click from immediately hiding the servicesBar
  event.stopPropagation();

  // If aboutBar is visible, hide it
  if (aboutBarToggle) {
    aboutBar.classList = "hidden";
    aboutIcon.classList = "size-4 inline";
    aboutBarToggle = false;
  }

  if (!servicesBarToggle) {
    // Show servicesBar and rotate icon
    servicesBar.classList =
      "text-white absolute w-36 bg-blue-800 bg-opacity-80 -right-[30px] rounded-2xl flex flex-col items-center leading-8 p-3 m-2 hover:bg-white hover:text-blue-800";
    servicesIcon.classList = "size-4 inline rotate-180";
    servicesBarToggle = true;
  } else {
    // Hide servicesBar and reset icon
    servicesBar.classList = "hidden";
    servicesIcon.classList = "size-4 inline";
    servicesBarToggle = false;
  }
});

// Toggle the aboutBar when aboutLi is clicked
aboutLi.addEventListener("click", function (event) {
  // Stop event propagation to prevent the document body click from immediately hiding the aboutBar
  event.stopPropagation();

  // If servicesBar is visible, hide it
  if (servicesBarToggle) {
    servicesBar.classList = "hidden";
    servicesIcon.classList = "size-4 inline";
    servicesBarToggle = false;
  }

  if (!aboutBarToggle) {
    // Show aboutBar and rotate icon
    aboutBar.classList =
      "text-white absolute w-36 bg-blue-800 bg-opacity-80 -right-[30px] rounded-2xl flex flex-col items-center leading-8 p-3 m-2 hover:bg-white hover:text-blue-800";
    aboutIcon.classList = "size-4 inline rotate-180";
    aboutBarToggle = true;
  } else {
    // Hide aboutBar and reset icon
    aboutBar.classList = "hidden";
    aboutIcon.classList = "size-4 inline";
    aboutBarToggle = false;
  }
});

// Add a click listener to the document body to hide the servicesBar and aboutBar when clicking outside of them
$.body.addEventListener("click", function (event) {
  // Check if the click is outside the servicesBar and servicesLi
  if (
    servicesBarToggle &&
    !servicesBar.contains(event.target) &&
    !servicesLi.contains(event.target)
  ) {
    // Hide servicesBar and reset icon
    servicesBar.classList = "hidden";
    servicesIcon.classList = "size-4 inline";
    servicesBarToggle = false;
  }

  // Check if the click is outside the aboutBar and aboutLi
  if (
    aboutBarToggle &&
    !aboutBar.contains(event.target) &&
    !aboutLi.contains(event.target)
  ) {
    // Hide aboutBar and reset icon
    aboutBar.classList = "hidden";
    aboutIcon.classList = "size-4 inline";
    aboutBarToggle = false;
  }
});

//باز شدن بار خدمات زیبایی
beutyServ.addEventListener("click", function () {
  if (!beutyServicesToggle) {
    beutyServBar.classList =
      "flex rounded-2xl absolute right-[145px] top-10 w-36 bg-blue-800 text-white hover:bg-white bg-opacity-80 hover:text-blue-700 flex-col items-center leading-8 p-3";
    servicesBarIcon.classList = "size-4 inline rotate-90";
    beutyServicesToggle = true;
  } else {
    beutyServBar.classList = "hidden";
    servicesBarIcon.classList = "size-4 inline";
    beutyServicesToggle = false;
  }
});

// Array of image URLs
const images = [
  "../assets/images/photo_2024-09-25_01-22-12.jpg",
  "../assets/images/photo_2024-09-25_16-43-58.jpg",
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
