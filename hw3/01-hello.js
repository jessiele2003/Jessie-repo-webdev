// Add your code here

let head = document.querySelector("head");
let css_link = document.createElement("link");
css_link.rel = "stylesheet";
css_link.href = "style.css";
head.appendChild(css_link);

let main = document.querySelector("main");
main.className = "container";

//include the image
let profile_image = document.createElement("img");
profile_image.setAttribute("id", "introduction_photo");
profile_image.src = src = "https://i.postimg.cc/fW6g0QnY/photos-hw1.jpg";
profile_image.alt = "This is the profile photo for the homework 1 bio";
main.appendChild(profile_image);

//include the bio introduction
let bio_paragraph = document.createElement("p");
main.appendChild(bio_paragraph);

//first sentence
let first_text = document.createElement("span1");
first_text.setAttribute("id", "first_sentence");
first_text.textContent =
  "My name is Jessie Le, and I am an undergraduate student at Portland State University.";
bio_paragraph.appendChild(first_text);

//the rest of the paragraph
let bio_text = document.createElement("span");
bio_text.setAttribute("id", "rest_paragraph");
bio_text.textContent =
  "This is my first time experiencing JavaScript, so I am excited to learn about it and hope to become familiar with it by the end of the term. In my free time, I am often spending quality moments with my friends and family, as it brings me joy and fulfillment.";
bio_paragraph.appendChild(bio_text);
