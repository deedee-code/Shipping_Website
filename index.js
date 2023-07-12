function subscribe() {
    const buttonElement = document.querySelector('.js-button'); 
     
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed')
    }
}

function totalCost() {
    const inputElement = document.querySelector('.js-inputCost');
    let cost = Number(inputElement.value);

    if (cost > 0 && cost < 40) {
        cost = cost + 10;
    }

    document.querySelector('.js-cost-price').innerHTML = `$${cost}`

}

function costKeydown() {
    if (event.key === 'Enter') {
        totalCost(event);
    }
}