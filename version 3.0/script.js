
const week = document.querySelector('.weekdays');
const Day = document.querySelector('.days');

//functions
let noDate =(month,year)=>new Date(year, month, 0).getDate();
let day =(year,month,date)=>new Date(`${month},${date},${year}`).getDay();
let startprev =(month,year)=>noDate(month-1,year)-day(year,month,1) + 1;
let endprev =(month,year)=>noDate(month-1,year);
let endpresent =(month,year)=>noDate(month,year);

//importent values
let presentyear = new Date().getFullYear();
let presentmonth = new Date().getMonth() + 1;
let presentdate = new Date().getDate();
let presentday = new Date().getDay();
let week1="";
let day1="";

//array of months
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//array of week days
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

//print all months
const printMonth =()=>{
    const month = document.querySelector('.month');
    let month1 = ""; 
    for (let i=0;i<12;i++){
        month1 +=`<div class="child2">${months[i]}</div>`;
    }
    month.innerHTML = month1;
}

//print all weekdays
const printWeek = () =>{
    for (let i=0;i<7;i++){
     week1 +=`<div>${weekday[i]}</div>`;
    }
    week.innerHTML= week1;
    let week2 = document.querySelectorAll(".weekdays div");
    week2[presentday].style.backgroundColor = '#202125';
}

//print all days
let countor1=0;
const printDays =()=>{
    let countor=0;
    for(let i=startprev(presentmonth,presentyear);i<=endprev(presentmonth,presentyear);i++){
        countor++;    
        day1 +=`<div>${i}</div>`;
    }
    countor1 = countor;
    for (let i=1;i<=endpresent(presentmonth,presentyear);i++){
        countor++;      
        day1 +=`<div>${i}</div>`;
    }
    for(let i=1;i<=42-countor;i++){
        day1 +=`<div>${i}</div>`;
    }
    Day.innerHTML = day1;
}

//css for present day ,week ,month
const cssDay = () =>{
    const cssmonth= document.querySelectorAll(".child2");
    cssmonth[presentmonth -1].style.backgroundColor = "#202125";

    const cssday = document.querySelectorAll(".days div");
    cssday[presentdate+countor1-1].style.backgroundColor = "#202125";
} 

//all function call
printDays();
printWeek();
printMonth();
cssDay();






