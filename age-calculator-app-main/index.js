function DayValidation(val) {
    var Day = document.getElementById("Day")
    var month = document.getElementById("Month")
    var year =document.getElementById("Year")
    if(isNaN(val)) {
        console.log("day is NAN")
        return
    }
    if (month.value == "" && val > 31) {
        console.log("day to long month undifined")
        return
    }
    if (val > innerif()) {
        console.log("day too long")
        return
    }
}
function innerif() {
    var month = document.getElementById("Month")
    var year =document.getElementById("Year")
    if (month.value == 2 && year.value%4 == 0) {
        return 29
    }
    else if (month.value == 2) {
        return 28
    }
    else if (month.value % 2 == 0){
        return 30
    }
    else {
        return 31
    }
}
function MonthValidation(val) {
    var Day = document.getElementById("Day")
    var month = document.getElementById("Month")
    var year =document.getElementById("Year")
    if(isNaN(val)) {
        console.log("month is NAN")
        return
    }
    if (val > 12) {
        console.log("month too long")
    }
    if (year.value == 2024 && val > new Date().getMonth() + 1 ) {
        console.log("month too long 22", val, new Date().getMonth())
    }   
    DayValidation(Day.value)
}
function YearValidation(val) {
    var Day = document.getElementById("Day")
    var month = document.getElementById("Month")
    var year =document.getElementById("Year")
    if(isNaN(val)) {
        console.log("year is NAN")
        return
    }
    if (val > new Date().getFullYear()){
        console.log("year too long")
    }
    MonthValidation(month.value)
}
function Buttonfunction() {
    var day = document.getElementById("Day").value
    var month = document.getElementById("Month").value
    var year = document.getElementById("Year").value

    var yearsdiffrence = new Date().getFullYear() - year
    var monthdiffrence = new Date().getMonth() - month +1
    var daysdiffrence = new Date().getDay() - day + 9

    var daydiaplay = document.getElementById("DaysOutput")
    var monthdiaplay = document.getElementById("MonthsOutput")
    var yeardiaplay = document.getElementById("YearsOutput")

    daydiaplay.innerHTML = daysdiffrence
    monthdiaplay.innerHTML = monthdiffrence
    yeardiaplay.innerHTML = yearsdiffrence
}