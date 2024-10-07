let $ = document;

let servicesLi = $.querySelector("#servicesLi");
let servicesBar = $.querySelector("#servicesBar");
let servicesBarToggle = false;
let servicesIcon = $.querySelector("#servicesIcon");

let beutyServ = $.querySelector("#beutyServ");
let beutyServBar = $.querySelector("#beutyServBar");
let beutyServBarIcon = $.querySelector("#beutyServBarIcon");
let beutyServicesToggle = false;

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

// نمایش و مخفی‌سازی servicesBar وقتی روی servicesLi کلیک می‌شود
servicesLi.addEventListener("click", function (event) {
  event.stopPropagation();

  // مخفی کردن aboutBar در صورت باز بودن
  if (aboutBarToggle) {
    aboutBar.classList.add("hidden");
    aboutIcon.classList.remove("rotate-180");
    aboutBarToggle = false;
  }

  // نمایش یا مخفی کردن servicesBar
  if (!servicesBarToggle) {
    servicesBar.classList.remove("hidden");
    servicesIcon.classList.add("rotate-180");
    servicesBarToggle = true;
  } else {
    servicesBar.classList.add("hidden");
    servicesIcon.classList.remove("rotate-180");
    servicesBarToggle = false;
    beutyServBar.classList.add("hidden"); // مخفی کردن beutyServBar در صورت بسته شدن servicesBar
    beutyServicesToggle = false;
  }
});

// نمایش و مخفی‌سازی beutyServBar وقتی روی beutyServ کلیک می‌شود
beutyServ.addEventListener("click", function (event) {
  event.stopPropagation();

  // مطمئن شوید که servicesBar قابل مشاهده است
  if (!servicesBarToggle) {
    servicesBar.classList.remove("hidden");
    servicesIcon.classList.add("rotate-180");
    servicesBarToggle = true;
  }

  // نمایش یا مخفی کردن beutyServBar
  if (!beutyServicesToggle) {
    beutyServBar.classList.remove("hidden");
    beutyServBarIcon.classList.add("rotate-90");
    beutyServicesToggle = true;
  } else {
    beutyServBar.classList.add("hidden");
    beutyServBarIcon.classList.remove("rotate-90");
    beutyServicesToggle = false;
  }
});

// نمایش و مخفی‌سازی aboutBar وقتی روی aboutLi کلیک می‌شود
aboutLi.addEventListener("click", function (event) {
  event.stopPropagation();

  // مخفی کردن servicesBar در صورت باز بودن
  if (servicesBarToggle) {
    servicesBar.classList.add("hidden");
    servicesIcon.classList.remove("rotate-180");
    servicesBarToggle = false;
    beutyServBar.classList.add("hidden"); // مخفی کردن beutyServBar در صورت بسته شدن servicesBar
    beutyServBarIcon.classList.remove("rotate-90");
    beutyServicesToggle = false;
  }

  // نمایش یا مخفی کردن aboutBar
  if (!aboutBarToggle) {
    aboutBar.classList.remove("hidden");
    aboutIcon.classList.add("rotate-180");
    aboutBarToggle = true;
  } else {
    aboutBar.classList.add("hidden");
    aboutIcon.classList.remove("rotate-180");
    aboutBarToggle = false;
  }
});

// مخفی کردن نوارها وقتی بیرون از آنها کلیک می‌شود
document.body.addEventListener("click", function (event) {
  // اگر بیرون از servicesBar و servicesLi کلیک شد
  if (
    servicesBarToggle &&
    !servicesBar.contains(event.target) &&
    !servicesLi.contains(event.target)
  ) {
    servicesBar.classList.add("hidden");
    servicesIcon.classList.remove("rotate-180");
    servicesBarToggle = false;
    beutyServBar.classList.add("hidden");
    beutyServBarIcon.classList.remove("rotate-90");
    beutyServicesToggle = false;
  }

  // اگر بیرون از aboutBar و aboutLi کلیک شد
  if (
    aboutBarToggle &&
    !aboutBar.contains(event.target) &&
    !aboutLi.contains(event.target)
  ) {
    aboutBar.classList.add("hidden");
    aboutIcon.classList.remove("rotate-180");
    aboutBarToggle = false;
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
  $.getElementById(prevButtonId).addEventListener("click", () => {
    const card = cardData[cardIndex];
    card.currentIndex =
      (card.currentIndex - 1 + card.imgArray.length) % card.imgArray.length;
    updateCard(cardIndex);
  });

  // Next button
  $.getElementById(nextButtonId).addEventListener("click", () => {
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

$.addEventListener("DOMContentLoaded", function () {
  // Array of image URLs
  const images = [
    "../assets/images/pic1.jpg",
    "../assets/images/pic2.jpg",
    "../assets/images/pic3.jpg",
    "../assets/images/pic4.jpg",
    "../assets/images/pic5.jpg",
    "../assets/images/pic6.jpg",
    "../assets/images/pic7.jpg",
    "../assets/images/pic8.jpg",
    "../assets/images/pic9.jpg",
    "../assets/images/pic10.jpg",
    "../assets/images/pic11.jpg",
    "../assets/images/pic12.jpg",
    "../assets/images/pic13.jpg",
  ];

  let currentIndex = 0;
  const intervalTime = 5000; // 5 seconds
  const galleryImage = document.getElementById("galleryImage");

  // Function to update the image source
  function updateImage(index) {
    galleryImage.src = images[index];
  }

  // Show next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
  }

  // Show previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
  }

  // Auto slide every 5 seconds
  let slideInterval = setInterval(nextSlide, intervalTime);

  // Next and previous buttons event listeners
  document.getElementById("next").addEventListener("click", () => {
    clearInterval(slideInterval); // Stop auto slide when manual navigation is used
    nextSlide();
    slideInterval = setInterval(nextSlide, intervalTime); // Restart auto slide after interaction
  });

  $.getElementById("prev").addEventListener("click", () => {
    clearInterval(slideInterval); // Stop auto slide when manual navigation is used
    prevSlide();
    slideInterval = setInterval(nextSlide, intervalTime); // Restart auto slide after interaction
  });

  // Initialize the first image
  updateImage(currentIndex);
});
