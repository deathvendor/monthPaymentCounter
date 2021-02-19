import dateGenerator from './dateGenerator';
import { drawPeriod, drawEvent, drawTotal } from './draw';

const totalSumCounter = (arr) => {
    const totalArr = [];
    let tempSum = 0;
    let tempMonth;
    let tempYear;

    const tempSet = (item) => {
        if(+item.date.slice(0, 2) >= 25) {
            tempMonth = +item.date.slice(3, 5);
            tempYear = +item.date.slice(-4);
        } else {
            if(+item.date.slice(3, 5) > 1) {
                tempMonth = +item.date.slice(3, 5) - 1;
                tempYear = +item.date.slice(-4);
            } else {
                tempMonth = 12;
                tempYear = +(item.date.slice(-4) - 1);
            }
        }
    }

    const pushIt = (tempMonth, tempYear, tempSum) => {
        totalArr.push({
            period: dateGenerator(tempMonth, tempYear),
            total: `$${tempSum}`
        });
        drawTotal(dateGenerator(tempMonth, tempYear), tempSum);
    }

    arr.forEach((item, id) => {
        if(id) {
            if((tempMonth === +item.date.slice(3, 5)) && (+item.date.slice(0, 2) >= 25) ||
            (tempMonth === +item.date.slice(3, 5) - 1) && (+item.date.slice(0, 2) < 25) ||
            (tempMonth === 12) && (+item.date.slice(3, 5) === 1) && (+item.date.slice(0, 2) < 25)) {
                if(+(item.date.slice(-4) - 1) === tempYear && tempMonth === 12 ||
                +item.date.slice(-4) === tempYear && tempMonth !== 12) {
                    tempSum += +item.payment.substr(1);
                    drawEvent(item.date, item.payment);
                } else {
                    pushIt(tempMonth, tempYear, tempSum);
                    tempSum = +item.payment.substr(1);
                    tempYear = +item.date.slice(-4);
                    drawPeriod();
                    drawEvent(item.date, item.payment);
                }
            } else {
                pushIt(tempMonth, tempYear, tempSum);
                tempSum = +item.payment.substr(1);
                tempSet(item);
                drawPeriod();
                drawEvent(item.date, item.payment);
            }
            if(id === arr.length - 1) {
                pushIt(tempMonth, tempYear, tempSum);
            }
            tempSet(item);
        } else {
            tempSum += +item.payment.substr(1);
            tempSet(item);
            drawPeriod();
            drawEvent(item.date, item.payment);
            if(id === arr.length - 1) {
                pushIt(tempMonth, tempYear, tempSum);
            }
        }
    });

    return totalArr
}

export default totalSumCounter;
