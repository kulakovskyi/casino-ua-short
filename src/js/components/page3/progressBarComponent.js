//progress bar

const progressCircles = document.querySelectorAll('.circle');
const textCircles = document.querySelectorAll('.ratings__item-text');

const reviewNumberArray = [3.5, 2.0, 3.5, 3, 4.0, 4.3];

function circlesCalculate(numbers){
    const progressCircleArray = numbers.map(item => { return item * 20; })
    for (let i= 0 ; i < progressCircles.length; i++) {
        progressCircles[i].setAttribute("stroke-dasharray", progressCircleArray[i] + ' , 100');
        textCircles[i].innerHTML = numbers[i].toFixed(1);
    }
}

circlesCalculate(reviewNumberArray)