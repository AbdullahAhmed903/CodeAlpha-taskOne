window.onload=function(){
    const currentDateElement=document.getElementById("currerntdate")
    const formattedDate = new Date().toISOString().split('T')[0];
    currentDateElement.value=formattedDate
 }

 const currentDateElement = new Date();

const calc=document.getElementById("form")
const dateInput =document.getElementById("dateandtime")
const yearInput=document.getElementById("year")
const monthInput=document.getElementById("month")
const dayInput=document.getElementById("day")

calc.addEventListener("submit",(e)=>{
    e.preventDefault()
    const enterDate=dateInput .value
    const birthDate = new Date(enterDate);
   
    let year=currentDateElement.getFullYear()-birthDate.getFullYear()
    let month=currentDateElement.getMonth()-birthDate.getMonth()
    let day=currentDateElement.getDate()-birthDate.getDate()
    let monthDays=getDaysInMonth(currentDateElement.getFullYear(),currentDateElement.getMonth())
    if (currentDateElement <= birthDate) {
            year = 0;
            month = 0;
            day = 0;
            alert("Please enter a valid birthdate");
            return 0
        }
    if(currentDateElement.getFullYear()==birthDate.getFullYear()&&currentDateElement.getMonth()==birthDate.getMonth()&&currentDateElement.getDate()==birthDate.getDate()){
        year=0;
        month=0;
        day=1
    }
    if(day<0){
        month--;
        day+=monthDays
    }
    if(month<0){
       year--
      month+=12
    }
    yearInput.value=year||0;
    monthInput.value=month||0;
    dayInput.value=day||0;
})


function getDaysInMonth(year, month) {
    return new Date(year, month+1 , 0).getDate();
}

