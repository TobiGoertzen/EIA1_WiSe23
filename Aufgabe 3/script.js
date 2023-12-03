let Start = prompt("A man offers you two different pills, one is red and the other one blue. Do you pick red or blue?");

if (Start == "blue" || Start == "Blue" || Start == "b" || Start == "B") {
    let SearchHim = prompt("You're waking up in your bed and have no clue what happened. Do you want to find the man? Yes or no?");
    if (SearchHim == "Yes" || FollowHim == "yes" || FollowHim == "Y" || FollowHim == "y") {
        let Success1 = prompt("You find him as the president of a great company. You tell him, that he was part of your dream and you took the blue pill. He knows that. You are hired, he offers you a great job. Success!");
    }
    else if (SearchHim == "No" || SearchHim == "no" || SearchHim == "N" || SearchHim == "n") {
        let Failure1 = prompt("You let the dream be a dream and you live your life like always. But you don't know what would have happened if you had looked for him. You lose.") }
    else {
        let Wrong = prompt("Wrong input.")
    } }
else if (Start == "red" || Start == "Red" || Start == "r" || Start == "R") {
    let FollowHim = prompt("The man tells you to follow him and walks through a door. Do you want to follow him? Yes or no?");
    if (FollowHim == "Yes" || FollowHim == "yes" || FollowHim == "Y" || FollowHim == "y") {
        let Failure2 = prompt("You are dead. Sorry :(");
}
    else if (FollowHim == "No" || FollowHim == "no" || FollowHim == "N" || FollowHim == "n") {
    let Success2 = prompt("You are very smart. Don't follow strangers in dark corners. You live :)"); }
    else {
        let Wrong = prompt("Wrong input.") }
    }
else {
    let Start = prompt("wrong input");
}
console.log (Start)