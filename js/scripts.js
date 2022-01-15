
function capAndCat(firstLetter, lastLetter){
  return firstLetter + lastLetter;
};

function reverse(firstLetter, lastLetter){
  return lastLetter + firstLetter;
}

function reverseWord(str){
  let reverse = [];
  for (var i = str.length; i >= 0; i--) {
    let letter = str.charAt(i);
    reverse.push(letter);
    
  }
  let final = "";
    for (var a in reverse)
    {
        var l = reverse[a];
        if (l !=",") {
        final = final + l;
      }
    }
  return(final);

}

function cipher(word){
    let newWord = word[0].toUpperCase () +  word.slice(1) + "";
    let firstLetter = word[0];
    let lastLetter = word[word.length-1]

    console.log(newWord);

    let cipher = word + reverse(firstLetter,lastLetter).toUpperCase();
    return(cipher);
}

$(document).ready(function(){
  $("#showCipherBtn").click(function(){
    $("showing").toggle();
    $("hiding").toggle();
    const word = prompt("Enter a Word");
   // let newWord = word[0].toUpperCase () +  word.slice(1) + "";
    let firstLetter = word[0];
    let lastLetter = word[word.length-1]

    console.log(word);
    
    alert("the cipher is:...");
    alert(reverseWord(cipher(word)));

    
    });
});


