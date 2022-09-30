const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const h = document.querySelector(".child1 h1");
let yeartoday = 2022;

const nextYear = () => {
  yeartoday++;
  h.innerHTML = yeartoday;
};

const prevYear = () => {
  yeartoday--;
  h.innerHTML = yeartoday;
};

//printing months
const Cssmonth =(j,month2)=>{
    for(let a=0;a<12;a++){
        if(j===a){
            month2[a].style.border = "3.5px solid #202125";
            month2[a].style.opacity = 1;
        }
        else if(j!==a){
            month2[a].style.border = "none";
            month2[a].style.opacity = 0.5;
        }
    }
}

//printing dates
const Printdate = (j,yeartoday1,presentmonth)=>{
    let countor = 0;
    let day1 = "";
    for (let i = startprev(j + 1, yeartoday1);i <= endprev(j + 1, yeartoday1);i++) {
      countor++;
      day1 += `<div value="${i}">${i}</div>`;
    }
    for (let i = 1; i <= endpresent(j + 1, yeartoday1); i++) {
        countor++;
        day1 += `<div value="${i}">${i}</div>`;
        
    }
    for (let i = 1; i <= 42 - countor; i++) {
        day1 += `<div value="${i}">${i}</div>`;
    }
    
    Day.innerHTML = day1;
    if(presentmonth === j){
        const cssday = document.querySelectorAll(".days div");
        cssday[presentdate+countor1-1].style.backgroundColor = "#202125";
    }
}

//show css of weekdays
const cssweekdays =(presentday1,j,presentmonth)=>{
    let week2 = document.querySelectorAll(".weekdays div");
    week2[presentday1].style.backgroundColor = '#12121f';
    if(presentmonth === j){
      week2[presentday1].style.backgroundColor = '#202125';
    }  
}

// const cssDay = (j,presentmonth,presentyear,yeartoday) =>{
//   console.log(presentyear,yeartoday);
//   if(presentmonth === j && presentyear === yeartoday){
//       console.log(presentyear,yeartoday);
//     const cssmonth= document.querySelectorAll(".child2");
//     cssmonth[presentmonth -1].style.backgroundColor = "#202125";

//     const cssday = document.querySelectorAll(".days div");
//     cssday[presentdate+countor1-1].style.backgroundColor = "#202125";
//   }
// }

const month2 = document.querySelectorAll('.child2');
for (let j = 0; j < 12; j++) {
  month2[j].addEventListener("click",()=> {
    Cssmonth(j,month2);
    Printdate(j,yeartoday,presentmonth-1);
    cssweekdays(presentday,j,presentmonth-1);
    // cssDay(j,presentmonth,presentyear,yeartoday);
  });
}





next.addEventListener("click", nextYear);

prev.addEventListener("click", prevYear);
