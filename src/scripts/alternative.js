const altCounter = (arr) => {
    const totalArr = [];
    const prevDate = {};

    arr.forEach((item, id) => {
        const day = +item.date.slice(0, 2);
        const month = +item.date.slice(3, 5);
        const year = +item.date.slice(-4);
        const payment = +item.payment.substr(1);

        if(!id) {
            totalArr.push({total: '$0', dates: []});
        } else {
            if(day >= 25 && prevDate.day >= 25 && month === prevDate.month && year === prevDate.year ||
            day < 25 && prevDate.day >= 25 && (month === prevDate.month + 1) && year === prevDate.year ||
            day < 25 && prevDate.day < 25 && month === prevDate.month && year === prevDate.year ||
            day < 25 && prevDate.day >= 25 && month === 1 && prevDate.month === 12 && (year === prevDate.year + 1)) {

            } else {
                totalArr.push({total: '$0', dates: []});
            }
        }

        totalArr[totalArr.length - 1].dates.push({date: item.date, payment: item.payment})
        totalArr[totalArr.length - 1].total = `$${+totalArr[totalArr.length - 1].total.substr(1) + payment}`;

        prevDate.day = day;
        prevDate.month = month;
        prevDate.year = year;

    });

    return totalArr
}

export default altCounter;
