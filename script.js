let text = document.getElementById("text");
let button= document.getElementById("wordLength");

function totalWords(){
    button.textContent= `Total words are ${(text.value.trim().split(" ")).length}`
}

function reset(){
    button.textContent="Characters";
    text.value="";
}
// trim will remove spaces ahead and after the word, split will convert the string into array by seprating it with comma, length will calculate the length of the array.
