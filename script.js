const button = document.querySelectorAll('.math');
const output = document.querySelector('output');
const del = document.querySelectorAll('.remove');
const equality = document.querySelector('.equality');

for (let math of button) {
    math.addEventListener('click', 
    (event) => output.innerText += event.target.textContent);
}

let remove = del[0].addEventListener('click', () => output.innerText = '');
let backspace = del[1].addEventListener('click', function() {
    let input = output.textContent;
    let result = input.slice(0, -1);
    output.innerText = result;
});

equality.addEventListener('click', function() {
    let expression = eval(output.textContent);
    output.innerText = expression;
    
});

