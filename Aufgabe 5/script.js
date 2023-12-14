stories = [
    "You're waking up in your bed and have no clue what happened. Do you want to find the man? Yes or no?",
    "The man tells you to follow him and walks through a door. Do you want to follow him? Walk or wait?",
    "You find him as the president of a great company. You tell him, that he was part of your dream and you took the blue pill. He knows that. You are hired, he offers you a great job. Success!",
    "You let the dream be a dream and you live your life like always. But you don't know what would have happened if you had looked for him. You lose.",
    "You are dead. Sorry :(",
    "You are very smart. Don't follow strangers in dark corners. You live :)",
]


const input = document.querySelector (".inputForm__field")
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        input.value = ""
        if (input.value == "Blue" || input.value == "blue" || input.value == "B" || input.value == "b") {
            output.innerHTML = stories[0] 
                if (input.value == "Yes" || input.value == "yes" || input.value == "Y" || input.value == "y") {
                    output.innerHTML = stories [2]
                } else if (input.value == "No" || input.value == "no" || input.value == "N" || input.value == "n") {
                    output.innerHTML = stories [3]
                }
            }
        } else if (input.value == "Red" || input.value == "red" || input.value == "R" || input.value == "r") {
            output.innerHTML = stories [1]
            if (input.value == "Walk" || input.value == "walk") {
                output.innerHTML = stories [4]
            } else if (input.value == "Wait" || input.value == "wait") {
                output.innerHTML = stories [5]
            }
        }
    
}
    
)