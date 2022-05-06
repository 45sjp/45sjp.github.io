const boxes = [
    document.querySelector('#stairs-box1'),
    document.querySelector('#stairs-box2'),
    document.querySelector('#stairs-box3'),
    document.querySelector('#stairs-box4'),
];

document.querySelector('#main').onload = () => {
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.cssText = `background-color: #ffcb00; transform: scaleY(${(index + 1) * 100}); transform-origin: 0 100%;`;
        }, (index + 1) * 1000);
    });
};