import totalSumCounter from './scripts/totalSumCounter';
import './styles/style.css';

fetch('./data/dates.json')
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        //console.log(totalSumCounter(data));
        totalSumCounter(data);
    });

/*console.log(totalSumCounter([
    {
        date: "30.01.2021",
        payment: "$1"
    },
    {
        date: "01.02.2021",
        payment: "$5"
    },
    {
        date: "05.03.2021",
        payment: "$294"
    },
    {
        date: "06.03.2022",
        payment: "$290"
    },
    {
        date: "07.04.2023",
        payment: "$290"
    },
]));*/
