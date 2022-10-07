const outerDiv = document.querySelector(".outerDiv");
const designer = document.querySelector(".designer");
const social_Icons = document.querySelector(".social_icons");
const overLay = document.querySelector(".overlay");
const icons = document.querySelectorAll(".icon");

const image = document.querySelector(".image");

const hover = (e) => {
  image.style.transform = "rotateY(180deg)";
  designer.style.bottom = 0;
  social_Icons.style.bottom = "20%";
  overLay.style.backgroundColor = "rgba(0,0,0,0.6)";
};

const hoverout = () => {
  image.style.transform = "rotateY(0deg)";
  designer.style.bottom = "-55px";
  social_Icons.style.bottom = "-20%";
  overLay.style.backgroundColor = "rgba(0,0,0,0)";
};

outerDiv.addEventListener("mouseenter", hover, true);

outerDiv.addEventListener("mouseout", hoverout);


