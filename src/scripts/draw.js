export const drawPeriod = () => {
    const newPeriod = document.createElement('div');
    newPeriod.classList.add('period');
    newPeriod.innerHTML = `
        <div class="dates"></div>
        <div class="total"></div>
    `;
    document.querySelector('.container').append(newPeriod);
}

export const drawEvent = (date, payment) => {
    const periods = document.querySelectorAll('.period');
    if(!periods.length) {
        return
    }
    const period = periods[periods.length - 1];

    const newEvent = document.createElement('div');
    newEvent.classList.add('event');
    newEvent.innerHTML = `
        <div class="date">${date}</div>
        <div class="payment">${payment}</div>
    `
    period.querySelector('.dates').append(newEvent);
}

export const drawTotal = (dates, sum) => {
    const periods = document.querySelectorAll('.period');
    if(!periods.length) {
        return
    }
    const period = periods[periods.length - 1];

    const newTotal = period.querySelector('.total');
    newTotal.innerHTML = `
        <p>${dates}</p>
        <p>Total: $${sum}</p>
    `
}
