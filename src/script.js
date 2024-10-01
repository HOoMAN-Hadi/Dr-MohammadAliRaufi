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

let botoxCardContainer = $.querySelector("#botoxCardContainer");
let botoxCardContainerImg = $.getElementById("botoxCardContainerImg");
let botoxCardContainerImgSecond = $.getElementById(
  "botoxCardContainerImgSecond"
);
// let lipsCardContainerImg = $.getElementById("lipsCardContainerImg");
// let lipsCardContainer = $.querySelector("#lipsCardContainer");
let botoxCardH1 = $.getElementById("botoxCardH1");
let botoxCardH3 = $.getElementById("botoxCardH3");
let lipsCardH1 = $.getElementById("lipsCardH1");
let lipsCardH3 = $.getElementById("lipsCardH3");
let botoxCardH1Second = $.getElementById("botoxCardH1Second");
let botoxCardH3Second = $.getElementById("botoxCardH3Second");

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

// // Array of image URLs
// const images = [
//   "../assets/images/photo_2024-09-25_01-22-12.jpg",
//   "../assets/images/photo_2024-09-25_16-43-58.jpg",
// ];

// let currentIndex = 0;

// // Function to change the background image
// function changeBackgroundImage() {
//   const section = document.getElementById("home");
//   currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
//   section.style.backgroundImage = `url(${images[currentIndex]})`;
// }
//کارت های خدمات زیبایی

// Data for all three cards (images and h3 text)
const cardData = [
  {
    imgElementId: "botoxCardContainerImg",
    h3ElementId: "botoxCardH3",
    imgArray: [
      "../assets/images/botaxImg1.jpg",
      "../assets/images/botoxImg2.jpg",
      "../assets/images/botoxImg3.jpg",
      "../assets/images/botoxImg4.jpg",
      "../assets/images/botoxImg5.jpg",
      "../assets/images/botoxImg6.jpg",
      "../assets/images/botoxImg7.jpg",
      "../assets/images/botoxImg8.jpg",
      "../assets/images/botoxImg9.jpg",
      "../assets/images/botoxImg10.jpg",
      "../assets/images/botoxImg11.jpg",
      "../assets/images/botoxImg12.jpg",
      "../assets/images/botoxImg13.jpg",
      "../assets/images/botoxImg14.jpg",
      "../assets/images/botoxImg15.jpg",
      "../assets/images/botoxImg16.jpg",
    ],
    textArray: [
      "رفع خط لبخند",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "رفع خطوط پیشانی - خط اخم و خطوط پنجه کلاغی کنار چشم",
      "جهت پیشگیری از تعریق بیش از حد",
      "رفع خط لبخند",
      "ترمیم خطوط پیشانی و خط اخم",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "بهبود نسبی چین و چروک اطراف چشم",
      "بهبود نسبی خط عمیق اخم",
      "رفع چروک",
      "تزریق ژل لب برند روفیل پلاس - رفع خطوط پیشانی و پنجه کلاغی کنار چشم برند مصپورت",
      "رفع چروک",
      "رفع چروک",
      "رفع خطوط پیشانی",
      "ترمیم خطوط پیشانی و خط اخم",
    ],
    currentIndex: 0,
  },
  {
    imgElementId: "lipsCardContainerImg",
    h3ElementId: "lipsCardH3",
    imgArray: [
      "../assets/images/lipsZhelImg1.jpg",
      "../assets/images/lipsZhelImg2.jpg",
      "../assets/images/lipsZhelImg3.jpg",
    ],
    textArray: ["برند روفیل پلاس", "برند روفیل پلاس", "برند روفیل پلاس"],
    currentIndex: 0,
  },
  {
    imgElementId: "botoxCardContainerImgSecond",
    h3ElementId: "botoxCardH3Second",
    imgArray: [
      "../assets/images/botoxImg10.jpg",
      "../assets/images/botoxImg9.jpg",
      "../assets/images/botoxImg8.jpg",
      "../assets/images/botoxImg7.jpg",
      "../assets/images/botoxImg6.jpg",
      "../assets/images/botoxImg5.jpg",
      "../assets/images/botoxImg4.jpg",
      "../assets/images/botoxImg3.jpg",
      "../assets/images/botoxImg2.jpg",
      "../assets/images/botaxImg1.jpg",
      "../assets/images/botoxImg16.jpg",
      "../assets/images/botoxImg15.jpg",
      "../assets/images/botoxImg14.jpg",
      "../assets/images/botoxImg13.jpg",
      "../assets/images/botoxImg12.jpg",
      "../assets/images/botoxImg11.jpg",
    ],
    textArray: [
      "بهبود نسبی خط عمیق اخم",
      "بهبود نسبی چین و چروک اطراف چشم",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "ترمیم خطوط پیشانی و خط اخم",
      "رفع خط لبخند",
      "جهت پیشگیری از تعریق بیش از حد",
      "رفع خطوط پیشانی - خط اخم و خطوط پنجه کلاغی کنار چشم",
      "رفع خطوط پنجه کلاغی کنار چشم",
      "رفع خط لبخند",
      "ترمیم خطوط پیشانی و خط اخم",
      "رفع خطوط پیشانی",
      "رفع چروک",
      "رفع چروک",
      "تزریق ژل لب برند روفیل پلاس - رفع خطوط پیشانی و پنجه کلاغی کنار چشم برند مصپورت",
      "رفع چروک",
    ],
    currentIndex: 0,
  },
];

// Function to update the card image and text
function updateCard(cardIndex) {
  const card = cardData[cardIndex];
  const imgElement = document.getElementById(card.imgElementId);
  const textElement = document.getElementById(card.h3ElementId);

  imgElement.src = card.imgArray[card.currentIndex];
  textElement.textContent = card.textArray[card.currentIndex];
}

// Button event handlers
function setupButtons(cardIndex, prevButtonId, nextButtonId) {
  // Previous button
  document.getElementById(prevButtonId).addEventListener("click", () => {
    const card = cardData[cardIndex];
    card.currentIndex =
      (card.currentIndex - 1 + card.imgArray.length) % card.imgArray.length;
    updateCard(cardIndex);
  });

  // Next button
  document.getElementById(nextButtonId).addEventListener("click", () => {
    const card = cardData[cardIndex];
    card.currentIndex = (card.currentIndex + 1) % card.imgArray.length;
    updateCard(cardIndex);
  });
}

// Setup buttons for each card
setupButtons(0, "prevBtn1", "nextBtn1");
setupButtons(1, "prevBtn2", "nextBtn2");
setupButtons(2, "prevBtn3", "nextBtn3");

// Automatically change image and text every 5 seconds for each card
cardData.forEach((card, index) => {
  setInterval(() => {
    card.currentIndex = (card.currentIndex + 1) % card.imgArray.length;
    updateCard(index);
  }, 5000); // 5000 ms = 5 seconds
});

// Change background every 5 seconds (5000 ms)
// setInterval(changeBackgroundImage, 5000);

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
