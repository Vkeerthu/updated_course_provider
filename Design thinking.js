import { loop, setVideo } from "./upNext.js";

const indexes = [
    {
        text: 'Introduction to Design Thinking',
        video: `<iframe  src="https://www.youtube.com/embed/gHGN6hs2gZY" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'DESIGN THINKING PROCESS',
        video: `<iframe  src="https://www.youtube.com/embed/_r0VX-aU_T8" title="YouTube" frameborder="0" allowfullscreen></iframe>`,
    },
    {
        text: 'DESIGN THINKING TECHNIQUES',
        video: `<iframe  src="https://www.youtube.com/embed/aTO8qIGAFVg" frameborder="0" allowfullscreen></iframe>`,
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

