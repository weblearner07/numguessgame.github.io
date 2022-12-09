let btn = document.getElementById('guess-btn');
let guess = document.getElementById('outputtext');

let num = [Math.floor(Math.random() * 100)];
console.log(num)
btn.addEventListener('click', function () {
    let inp = document.getElementById('guess-input').value;
        if (inp == num) {
            guess.innerHTML = `You guessed right, number was ${num}`;
        } else if (inp < num) {
            guess.innerHTML = `Your guess is smaller , Think about Big number`;
            
        }
        if (inp > num) {
            guess.innerHTML = `Your guess is Bigger, Think of Smaller number`

        }
})
