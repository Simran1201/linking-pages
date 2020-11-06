const colors=["green","red","rgba(133,120,150)", "#f15025", "pink","blue","purple"]; //created an array
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
btn.addEventListener("click",function()
{
//task
const randomNumber = getRandomNumber();
document.body.style.backgroundColor=colors[randomNumber];           //style
color.textContent = colors[randomNumber];                           //showing name of the color
}
);
function getRandomNumber()
{
    return Math.floor(Math.random() * colors.length);   //it return from 0-1....
}