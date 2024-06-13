function updateValue(val) {
    var pageviews = document.getElementById("pageviewsamount")
    pageviews.innerHTML = val
    var amountpermonth = Math.ceil(val*(4/25)*100)/100
    updatemoney(amountpermonth)
    var slider = document.getElementById("myrange")
    slider.setAttribute("value", val)
}
function updatemoney(amountpermonth) {
    var money = document.getElementById("money")
    var monthoryear = document.getElementById("month")
    if (monthoryear.innerHTML == "month") {
        money.innerHTML = amountpermonth
    }
    else {
        var amountperyear = Math.ceil((amountpermonth*12)*0.75*100)/100
        money.innerHTML = amountperyear
    }
}
function Checkbox(val) {
    var monthoryear = document.getElementById("month")
    var slider = document.getElementById("myrange")
    if(monthoryear.innerHTML == "month") {
        monthoryear.innerHTML = "year"
    }
    else {
        monthoryear.innerHTML = "month"
    }
    updateValue(slider.getAttribute("value"))
}

const sliderEl = document.querySelector("#range")

function progressScript() {
  const sliderValue = sliderEl.value;
  sliderEl.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
}

progressScript()
