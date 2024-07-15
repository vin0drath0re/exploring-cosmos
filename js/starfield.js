const svgList = [
    document.getElementById('layer1'),
    document.getElementById('layer2'),
    document.getElementById('layer3')
];



for (let index = 1; index < 16; index++) {

    const svg = document.getElementById('layer' + index) ;
    const numDots = window.innerWidth/5;
const compStyles = window.getComputedStyle(svg);
const width = parseFloat(compStyles.getPropertyValue("width"));
const height = parseFloat(compStyles.getPropertyValue("height"));


for (let i = 0; i < numDots; i++) {
    const cx = Math.random() * width;
    const cy = Math.random() * height;
    const r = 0.1 + Math.random() * 0.5; // Random radius between 2 and 5

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);
    circle.setAttribute('fill', '#F0F0F0');

    svg.appendChild(circle)

}


    
}


