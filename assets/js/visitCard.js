const visitCardClose = document.querySelector(".close-visit-card");
const visitCardFront = document.querySelector(".visit-card-front");
const visitCard = document.querySelector("#visit-card .visit-card-inner");
const cardReflect = document.querySelectorAll(".shiny");
const cardShadow = document.querySelector("#cardShadow");

function rotateElement(event, element, elementReflect){
    // Catch the mouse movements
    const x = event.clientX;
    const y = event.clientY;
    /* console.log(x, y); */

    // Retreive the middle of the window
    const middleX = window.innerWidth/2;
    const middleY = window.innerHeight/2;
    /* console.log(middleX, middleY); */

    // Get the offset from the middle
    const offsetX = ((x - middleX) / middleX) * 25;
    const offsetY = ((y - middleY) / middleY) * 25;
    /* console.log(offsetX, offsetY); */

    const direction = ((y - middleY) / middleY) * 45;
    /* console.log(direction); */

    element.style.setProperty("--rotateX", -1 * offsetY + "deg");
    element.style.setProperty("--rotateY", 1 * offsetX + "deg");
    elementReflect.style.setProperty("--position-left", offsetX * 5 + "%");
    /* elementReflect.style.setProperty("--rotate", -1 * direction + "deg"); */

}

function cardShadowEvent(){
    
    console.log('cardShadowEvent');
}

function flipVisitCard (){
    visitCard.style.transform = "rotateY(180deg)";
    console.log('flipVisitCard');
    console.log(cardShadow.offsetWidth-450);
    cardShadow.style.width = cardShadow.offsetWidth-50;
}

function unflipVisitCard(){
    visitCard.style.transform = "rotateY(0deg)";
}

document.addEventListener("mousemove", (e) => {
    rotateElement(e, visitCardFront, cardReflect[0]);
})

visitCardFront.addEventListener("click", flipVisitCard);

visitCardClose.addEventListener("click", unflipVisitCard);