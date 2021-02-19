const dateGenerator = (month, year) => {

    let firstMonthOut;
    let lastMonthOut;
    let lastYearOut;

    if(month.toString().length === 2) {
        firstMonthOut = month.toString();
    } else {
        firstMonthOut = `0${month}`;
    }

    if(month === 12) {
        lastYearOut = (year + 1).toString();
        lastMonthOut = '01';
    } else {
        lastYearOut = year.toString();
        if((month + 1).toString().length === 2) {
            lastMonthOut = (month + 1).toString();
        } else {
            lastMonthOut = `0${month + 1}`;
        }
    }

    return `25.${firstMonthOut}.${year.toString()} - 24.${lastMonthOut}.${lastYearOut}`
}

export default dateGenerator;
