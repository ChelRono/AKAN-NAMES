const myForm=document.getElementById("myForm");//gets elements by id

const maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
const femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

var CC=parseInt(CC);
var YY=parseInt(YY);
//console.log(YY)
var MM=parseInt(MM);
let DD =parseInt(DD);
var calculateDayOfWeek=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
var day0fWeek=calculateDayOfWeek.toFixed() -1;

myForm.addEventListener("submit", (event) => {
    event.preventDefault();//stop from reloading
const formData= new FormData(e.target.get)//collect inputs from HTML
var dateEntered=new Date(formData.get("date"));
if (formData.get("gender")=="male"){
    document.getElementById('result').innerHTML="You were born on " + day[dayOfWeek] + "So your Akan name is" + maleAkanNames[dateEntered.getDay()];
} else {
    document.getElementById('result').innerHTML="You were born on " +  day[day0fWeek] +  "So your Akan name is" + femaleAkanNames[dateEntered.getDay()];
}
}
