let $ = document;

const scrollBar = $.getElementById("scrollBar");
let nav = $.querySelector("#nav");
const liItems = document.querySelectorAll("ul li");

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

const sunIcon = $.getElementById("sunIcon");
const brithnessBar = $.getElementById("brithnessBar");
let brightnessBarToggle = false;

// یک تابع برای بستن همه نوارهای باز
function closeAllBars() {
  // بستن نوار خدمات (servicesBar) و منوی فرعی خدمات زیبایی (beutyServBar)
  if (servicesBarToggle) {
    servicesBar.classList.add("hidden");
    servicesIcon.classList.remove("rotate-180");
    servicesBarToggle = false;
    beutyServBar.classList.add("hidden");
    beutyServBarIcon.classList.remove("rotate-90");
    beutyServicesToggle = false;
  }

  // بستن نوار درباره (aboutBar)
  if (aboutBarToggle) {
    aboutBar.classList.add("hidden");
    aboutIcon.classList.remove("rotate-180");
    aboutBarToggle = false;
  }

  // بستن نوار روشنایی (brightnessBar)
  if (brightnessBarToggle) {
    brithnessBar.classList.add("hidden");
    brithnessBar.classList.remove("flex");
    brightnessBarToggle = false;
  }
}

// مدیریت کلیک روی servicesLi
servicesLi.addEventListener("click", function (event) {
  event.stopPropagation();
  closeAllBars(); // بستن نوارهای باز
  servicesBar.classList.toggle("hidden");
  servicesIcon.classList.toggle("rotate-180");
  servicesBarToggle = !servicesBarToggle;
});

// مدیریت کلیک روی beutyServ (منوی فرعی خدمات زیبایی)
beutyServ.addEventListener("click", function (event) {
  event.stopPropagation();
  if (!servicesBarToggle) {
    servicesBar.classList.remove("hidden");
    servicesIcon.classList.add("rotate-180");
    servicesBarToggle = true;
  }
  beutyServBar.classList.toggle("hidden");
  beutyServBarIcon.classList.toggle("rotate-90");
  beutyServicesToggle = !beutyServicesToggle;
});

// مدیریت کلیک روی aboutLi
aboutLi.addEventListener("click", function (event) {
  event.stopPropagation();
  closeAllBars(); // بستن نوارهای باز
  aboutBar.classList.toggle("hidden");
  aboutIcon.classList.toggle("rotate-180");
  aboutBarToggle = !aboutBarToggle;
});

// مدیریت کلیک روی sunIcon (نوار روشنایی)
sunIcon.addEventListener("click", function (event) {
  event.stopPropagation();
  closeAllBars(); // بستن نوارهای باز
  brithnessBar.classList.toggle("hidden");
  brithnessBar.classList.toggle("flex");
  brightnessBarToggle = !brightnessBarToggle;
});

// کلیک خارج از نوارها برای بستن نوارهای باز
document.body.addEventListener("click", function () {
  closeAllBars();
});

// بستن نوار روشنایی هنگام کلیک روی سایر آیتم‌ها
liItems.forEach((li) => {
  li.addEventListener("click", function (event) {
    if (li !== sunIcon) {
      brithnessBar.classList.add("hidden");
      brithnessBar.classList.remove("flex");
      brightnessBarToggle = false;
    }
  });
});

// بستن نوار روشنایی هنگام کلیک خارج از آن
$.addEventListener("click", function (event) {
  if (!brithnessBar.contains(event.target) && !sunIcon.contains(event.target)) {
    brithnessBar.classList.add("hidden");
    brithnessBar.classList.remove("flex");
    brightnessBarToggle = false;
  }
});

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
    "../assets/images/pic15.jpg",
    "../assets/images/pic17.jpg",
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

$.addEventListener("scroll", function () {
  if ($.documentElement.scrollTop == 0) {
    nav.classList.remove("bg-opacity-50");
    nav.classList.remove("py-2");
    nav.classList.add("py-3");
  } else {
    nav.classList.add("bg-opacity-50");
    nav.classList.remove("py-3");
    nav.classList.add("py-2");
  }
});

//Brightness Slider
const slider = $.getElementById("slider");
function brightnessHandler() {
  console.log(slider.value);
  $.body.className = `bg-blue-800 text-white font-lalezar brightness-${slider.value}`;
  localStorage.setItem("brightnessValue", slider.value);
}
function getLocalStorageBv() {
  const savedBrightness = localStorage.getItem("brightnessValue");
  if (savedBrightness) {
    slider.value = savedBrightness;
    $.body.className = `bg-blue-800 text-white font-lalezar brightness-${slider.value}`;
  }
}
window.addEventListener("load", getLocalStorageBv);
slider.addEventListener("input", brightnessHandler);

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let documentHeight = document.body.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollPercent = scrollTop / (documentHeight - windowHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);

  scrollBar.style.width = scrollPercentRounded + "%";
  console.log(scrollPercentRounded);
});
