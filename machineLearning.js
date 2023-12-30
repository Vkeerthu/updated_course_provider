import { loop, setVideo } from "./upNext.js";

const indexes = [
    {
        text: 'Introduction to Machine Learning',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/gmvvaobm7eQ?si=wRX5O0S0Isvxq_e3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Linear Regression',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/J_LnPL3Qg70?si=StGCoXJJ8G_ypiDx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Logistics regression',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vsWrXfO3wWw?si=C_1VlE2xxfgqvSEt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Generalized linear model',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/KfnhNlD8WZI?si=x1bgPg7Ll8Y9NmjU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Naive bayes',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PPeaRc-r1OI?si=FP6rThC36YXQ1l5N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Support vector machines',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/FB5EdxAGxQg?si=cqiNXq-yVREnAABU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Kernals',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9yl6-HEY7_s?si=s0ec1-Arwx8XGIbj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Data splits,models',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9yl6-HEY7_s?si=krJrZSnfSDu05a7L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Approx/estimation error ',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/8klqIM9UvAc?si=QgoqIeGLj4xLespp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },
    {
        text: 'Decision trees',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ok2s1vV9XW0?si=JaYPPQxmsC2XPH4l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    },

    // Add more video content as needed
];

indexes.map((next, index) => loop(next, index));

const element = document.getElementsByClassName('next-bar');

for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", (e) => {
        console.log(e.target.id);
        setVideo(e.target.id, indexes);
    });
}
