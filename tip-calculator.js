const amountEl = document.querySelector('.amount');
const percentageEl = document.querySelector('.percentage');
const buttonEL = document.querySelector('.calculate');
const resetEl = document.querySelector('.reset');
const calculateTotal = document.querySelector('.total');

function calculate() {
    const billValue = amountEl.value;
    const tipValue = percentageEl.value;
    const totalValue = billValue * (1 + tipValue / 100);
    calculateTotal.innerText = `$ ${totalValue.toFixed(2)}`;
};

function reset() {
    const totalValue = 0.00;
    const billValue = amountEl.value = '';
    const tipValue = percentageEl.value = '';
    amountEl.innerText = `${billValue}`;
    percentageEl.innerText = `${tipValue}`;
    calculateTotal.innerText = `$ ${totalValue.toFixed(2)}`;
}

resetEl.addEventListener("click", reset);
buttonEL.addEventListener("click", calculate);
