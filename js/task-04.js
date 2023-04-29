{/* <div id="counter">
<button type="button" data-action="decrement">-1</button>
<span id="value">0</span>
<button type="button" data-action="increment">+1</button>
</div> */}

let counterValue = 0;
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

btnDecrementRef.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

btnIncrementRef.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});