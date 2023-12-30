// cybersecurity.js

// Import necessary functions from upNext.js
import { loop, setVideo } from "./upNext.js";

// Define your content for the cybersecurity course
const cybersecurityContent = [
    {
        text: 'Introduction to Cybersecurity',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nzZkKoREEGo?si=09RDeF9OS8Un2cQ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'What is cyber security?',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nzZkKoREEGo?si=URVsPK1XZiSrEflQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'cybersecurity career',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ooJSgsB5fIE?si=JWtwD0RW1FSZKK3m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'man in the middle attack',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/eO8l70pdVhY?si=pzUJcsRHvA4U6K6w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'NIST framework',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ooJSgsB5fIE?si=6b3IOTCM41wgIaum" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'types of cyber security',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/_QtSB0Old_Q?si=RKmX16Pp6zno9phf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'popular tools ',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZLyFt6BdxD4?si=Z00CTolaPlXGKkh7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },

    // Add more content as needed
    // ...
];

// Loop through the content and display it
cybersecurityContent.map((next, index) => loop(next, index));

// Set up event listeners for the "up-next" buttons
const element = document.getElementsByClassName('next-bar');

for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", (e) => {
        console.log(e.target.id);
        setV(e.target.id);
    });
}

// Function to set the video based on the clicked button
function setV(id) {
    setVideo(id, cybersecurityContent);
}
