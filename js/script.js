const target = document.getElementById('target')

let listNumbers = '<ul>';

// Scrivo i numeri da 1 a 100, successivamente controllo i numeri divisibili e gli assegno un nome diverso
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        listNumbers += '<li class=fizzbuzz>FizzBuzz</li>';
    } else if (i % 3 === 0) {
        listNumbers += '<li class=fizz>Fizz</li>';
    } else if (i % 5 === 0) {
        listNumbers += '<li class=buzz>Buzz</li>'
    } else {
        listNumbers += `<li>${i}</li>`;
    }
}
listNumbers += '</ul>'

target.innerHTML = listNumbers;

// Controllo quali numeri siano multipli di 3