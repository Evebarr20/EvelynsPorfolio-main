/*
    Developed in 2022 month of September
*/

const descriptions = [
    {
        headline: "Data Structures Lab 1",
        caption: "Dummy Singly Linked-List: <a href='https://github.com/Evebarr20/CSCD300Lab1' target='_blank' rel='noopener'>View Project</a>",
    },
    {
        headline: "Data Structures Lab 2",
        caption: "Dummy Circular Doubly Linked-List: <a href='https://github.com/Evebarr20/CSCD300Lab2' target='_blank' rel='noopener'>View Project</a>"
    },
    {
        headline: "Data Structures Lab 3",
        caption: "Recursive Project: <a href='https://github.com/Evebarr20/CSCD300Lab3' target='_blank' rel='noopener'>View Project</a>"
    },
    {
        headline: "Data Structures Lab 5",
        caption: "Stack Linked-List: infix expression to postfix expression and evaulate postfix expression: <a href='https://github.com/Evebarr20/CSCD300Lab5' target='_blank' rel='noopener'>View Project</a>"
    },
    {
        headline: "Data Structures Lab 7",
        caption: "Hashtable: <a href='https://github.com/Evebarr20/CSCD300Lab7' target='_blank' rel='noopener'>View Project</a>"
    },
    {
        headline: "Data Structures Lab 8",
        caption: "Queue Class: Merge and MergeSort: <a href='https://github.com/Evebarr20/CSCD300Lab8' target='_blank' rel='noopener'>View Project</a>"
    }
]

const imageTag = document.querySelectorAll("div.images img");
const prevButton = document.querySelector("div.prev-button");
const nextButton = document.querySelector("div.next-button");

const headlineTag = document.querySelector("div.slideshow-content h2");
const linkTag = document.querySelector("div.slideshow-content a");
const captionTag = document.querySelector("p.project-p");

let currentImage = 0;

nextButton.addEventListener("click", () => {
    nextImage();
    updateImageCaption();
})

prevButton.addEventListener("click", () => {
    prevImage();
    updateImageCaption();
})

const nextImage = function () {
    currentImage += 1;
    if (currentImage > imageTag.length - 1) {
        currentImage = 0;
    }
}

const prevImage = function () {
    currentImage -= 1;
    if (currentImage < 0) {
        currentImage = imageTag.length - 1;
    }
}

const updateImageCaption = function () {
    imageTag.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = `translateX(${-40}px)`;
    })
    imageTag[currentImage].style.transform = `translateX(${0}px)`
    imageTag[currentImage].style.opacity = 1;
    headlineTag.textContent = descriptions[currentImage].headline;
    captionTag.innerHTML = descriptions[currentImage].caption;
}

updateImageCaption();