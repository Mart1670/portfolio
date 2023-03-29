let projectCard = document.querySelectorAll("#projects .card-inner");
let openProjectCard = document.querySelectorAll("#projects .project-card-front");
let closeProjectCard = document.querySelectorAll("#projects .close-card");

/* console.log(openProjectCard); */

function flipCard (event){
        event.currentTarget.parentNode.style.transform = "rotateY(180deg)";
}

function unflipCard (event){
        event.currentTarget.parentNode.parentNode.parentNode.style.transform = "rotateY(0deg)";
}

for(i=0; i<openProjectCard.length; i++){
    openProjectCard[i].addEventListener("click", flipCard);
}

for(i=0; i<closeProjectCard.length; i++){
    closeProjectCard[i].addEventListener("click", unflipCard);
}