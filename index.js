// function fizzBuzz(num){
//     for (let i =1; i <= num; i++){
//         if (i %5 === 0 && i % 3 === 0)console.log("Fizz Buzz");
//         else if(i % 3 === 0) console.log("Buzz");
//         else if(i % 5 === 0)console.log("Fizz");
//         else console.log(i);
//     }
// }
// fizzBuzz(40)
// const nameInput = document.getElementById('input');
// document.getElementById('form').addEventListener('submit', function (e) {
//     e.preventDefault();
//     for (let i =1; i <= nameInput.value; i++){
//         if (i %5 === 0 && i % 3 === 0)console.log("Fizz Buzz");
//         else if(i % 3 === 0) console.log("Buzz");
//         else if(i % 5 === 0)console.log("Fizz");
//         else console.log(i);
//     }
//
//
//
//     console.log(nameInput.value)
//
// }
// )

function showInput() {
    let textInput;
    textInput = document.getElementById('input').value
    if (textInput === 0) {
        textInput = 'Invalid Input'
    } else if (textInput % 3 === 0 && textInput % 5 !== 0) {
        textInput = 'Fizz!'
    } else if (textInput % 5 === 0 && textInput % 3 !== 0) {
        textInput = 'Buzz!'
    } else if (textInput % 5 === 0 && textInput % 3 === 0) {
        textInput = 'Fizz Buzz!'
    }
    document.getElementById('display').innerHTML = textInput;
    console.log(document.getElementById('input').value)
}



