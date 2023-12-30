import { loop, setVideo } from "./upNext.js";

const indexes = [
    {
        text: 'Introduction to Data Structure',
        video: `<iframe  src="https://www.youtube.com/embed/SFEROgwxicA" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'Fuctions',
        video: `<iframe  src="https://www.youtube.com/embed/Npo1u37lcg8" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'Pointers',
        video: `<iframe  src="https://www.youtube.com/embed/MIL2BK02X8A" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'Arrays',
        video: `<iframe  src="https://www.youtube.com/embed/Mubmm7rqjK4" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'Control Statements',
        video: `<iframe  src="https://www.youtube.com/embed/YiPoFeWrSYY" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'C struct',
        video: `<iframe  src="https://www.youtube.com/embed/ioMte7ayaHQ" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },

    // Add more video content as needed
];

indexes.map((next, index) => loop(next, index));

const element = document.getElementsByClassName('next-bar');

for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", (e) => {
        console.log(e.target.id);
        setV(e.target.id);
    });
}

function setV(id) {
    setVideo(id, indexes);
}
