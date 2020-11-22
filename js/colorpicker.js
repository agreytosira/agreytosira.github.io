const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const code = document.querySelector('.code');
const warna = document.querySelector('.warna');

red.addEventListener('input', function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    code.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')' + ';';
    warna.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
green.addEventListener('input', function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    code.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')' + ';';
    warna.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});
blue.addEventListener('input', function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    code.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')' + ';';
    warna.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("code"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
}

// Copy to clipboard button

const btnCopy = document.querySelector('.btn-copy');
btnCopy.onclick = function () {
    const hasilcode = code.innerText;
    copyDivToClipboard();
    alert('Code was copied to clipboard!')

}