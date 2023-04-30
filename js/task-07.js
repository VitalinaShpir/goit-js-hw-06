{/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */}

const inputRef = document.querySelector('#font-size-control');
const txtRef = document.querySelector('#text');


txtRef.style.fontSize = inputRef.value + 'px';

inputRef.addEventListener('input', onChangeFont);

function onChangeFont(e) {
    txtRef.style.fontSize = e.target.value + 'px';   
}