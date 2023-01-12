const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#fa5205
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = "#";
    //loop to add  6 random numbers that form a collor 
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.background = hexColor;
});

//function to create a random number that we add in the event listener 
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}