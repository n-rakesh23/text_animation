let h1= document.querySelector("#container");
     
let carrers =['YouTuber','Lawyer','Doctor','Dentist','Scientist','Instructor'];

let characterIndex=0;
let carrerIndex=0;
 updateText();

function updateText() {
     characterIndex++;
    h1.innerHTML=`<h1>I am a ${carrers[carrerIndex].slice(0,characterIndex)}</h1>`.normalize();
    if(characterIndex===carrers[carrerIndex].length){
        characterIndex=0;
        carrerIndex++;
    }
    if(carrerIndex===carrers.length){
            carrerIndex=0;
    }
    setTimeout(updateText,400);
}