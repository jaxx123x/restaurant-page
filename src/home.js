import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";


function returnImages() {
    const image1 = document.createElement("img");
    const image2 = document.createElement("img");
    const image3 = document.createElement("img");
    const image4 = document.createElement("img");
    image1.src = img1;
    image2.src = img2;
    image3.src = img3;
    image4.src = img4;
    const images = [image1, image2, image3, image4];
    return images;
}

function returnFooter() {
    const footer = document.createElement("footer");
    const nav = document.createElement("nav");
    footer.appendChild(nav);
    nav.innerHTML = "";
    nav.textContent = "The Odin Project blah blah 2025.";
    return document.body.appendChild(footer);
}


export const homePage = function(){
    const images = returnImages();

    const content = document.querySelector("#content");
    content.innerHTML = "";

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "About our location";
    content.appendChild(title);

    const info = document.createElement("div");
    info.classList.add("info");
    content.appendChild(info);

    info.appendChild(images[1]);
    const infoText = document.createElement("p");
    infoText.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    info.appendChild(infoText);

    const info2 = document.createElement("div");
    info2.classList.add("info2");
    content.appendChild(info2);

    
    info2.appendChild(images[0]);
    const scheldueText = document.createElement("div");
    scheldueText.classList.add("scheldue-text");
    info2.appendChild(scheldueText);
    const schedule = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
      ];
    schedule.forEach(day => {
        const days = document.createElement("p");
        days.textContent = day;
        scheldueText.appendChild(days);
    });
    info2.appendChild(images[2]);


    const info3 = document.createElement("div");
    info3.classList.add("info3");
    content.appendChild(info3);
    info3.textContent = "Location: 123 Forest Drive, Forestville, Maine";

    content.appendChild(images[3]);

    returnFooter();

    
};

export const test = function () {
    Element.innerHTML = "";
}