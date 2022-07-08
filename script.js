"use strict";
const [...featureItems] = document.querySelectorAll(".featureItem");
const featuresMenu = document.querySelector(".featuresMenu");
const [...features] = document.querySelectorAll(".feature");
const [...questions] = document.querySelectorAll(".question");
const [...answers] = document.querySelectorAll(".answer");
const [...arrows] = document.querySelectorAll(".arrow-icon");
const emailInput = document.querySelector(".emailInput");
const contactBtn = document.querySelector(".contactBtn");
const [...activeLine] = document.querySelectorAll(".activeLine");
const header = document.querySelector("header");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const close = document.querySelector(".close-icon");
const menuMobile = document.querySelector(".menu-headerMobile");
const logoMobile = document.querySelector(".menu-logo");
let logoHeader = document.querySelector(".logo-header");
const changeNavItem = function (click) {
  featureItems.forEach((item) => item.classList.remove("activeFeature"));
  activeLine.forEach((line) => line.classList.add("hidden"));
  click.closest(".featureItem").classList.add("activeFeature");
  click
    .closest(".featureBox")
    .querySelector(".activeLine")
    .classList.remove("hidden");
};
const toggleFeaturesText = function (element) {
  const index = featureItems.indexOf(element);
  features.forEach((item) => item.classList.add("unactive"));
  features[index].classList.remove("unactive");
};
const emailChange = function (borderRadius, border) {
  emailInput.style.borderBottomLeftRadius = borderRadius;
  emailInput.style.borderBottomRightRadius = borderRadius;
  emailInput.style.border = border;
};
featuresMenu.addEventListener("click", function (e) {
  const click = e.target;
  if (!click.closest(".featureItem")) return;
  changeNavItem(click);

  featureItems.forEach((element) => {
    if (!element.classList.contains("activeFeature")) return;
    toggleFeaturesText(element);
  });
});
questions.forEach((question) =>
  question.addEventListener("click", function (e) {
    questions.forEach(
      (question) =>
        (question.style.borderBottom = "1px solid var(--grayish-blue)")
    );
    const answer = question.closest(".questionBox").querySelector(".answer");
    const arrow = question.querySelector(".arrow-icon");
    answers.forEach((answer) => answer.classList.add("hidden"));

    arrows.forEach((arrow) => {
      arrow.style.color = "var(--soft-blue)";
      arrow.style.transform = "rotate(360deg)";
    });
    answer.classList.remove("hidden");
    question.style.borderBottom = "none";
    answer.style.borderBottom = "1px solid var(--grayish-blue)";
    arrow.style.color = "var(--soft-red)";
    arrow.style.transform = "rotate(180deg)";
  })
);
contactBtn.addEventListener("click", function (e) {
  const errorIcon = document.querySelector(".error-icon");
  const errorParagraph = document.querySelector(".error-paragraph");
  const email = emailInput.value;

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  console.log(email);
  errorIcon.classList.add("hidden");
  errorParagraph.classList.add("hidden");
  emailChange("5px", "none");
  if (emailRegex.test(email)) return;
  errorIcon.classList.remove("hidden");
  emailChange("0px", "1px solid var(--soft-red)");
  errorParagraph.classList.remove("hidden");
});
hamburgerIcon.addEventListener("click", function () {
  header.classList.add("menuActive");
  hamburgerIcon.classList.add("hidden");
  close.classList.remove("hidden");
  menuMobile.classList.remove("hidden");
  logoHeader.classList.add("hidden");
  logoMobile.classList.remove("hidden");
});
close.addEventListener("click", function () {
  hamburgerIcon.classList.remove("hidden");
  close.classList.add("hidden");
  header.classList.remove("menuActive");
  menuMobile.classList.add("hidden");
  logoHeader.classList.remove("hidden");
  logoMobile.classList.add("hidden");
});
