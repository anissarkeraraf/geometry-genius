function triangleCalculateArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base);

// Height
    const triangleHeigthInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeigthInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

// Calculate
const area = 0.5 * base * height;
console.log('triangle area:', area);

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;

}