var myForm=document.getElementById("myForm");//gets elements by id

var maleAkanNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
var femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

myForm.addEventListener("submit", (e) => {
    e.preventDefault();//stop from reloading



var dayOfWeek=Math.floor(parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD) %7);

if (formData.get("gender")=="Male"){
    document.getElementById('result').innerHTML="You were born on " + day[dayOfWeek] + "So your Akan name is" + maleAkanNames[dateEntered.getDate()];

} else {
    document.getElementById('result').innerHTML="You were born on " +  day[dayOfWeek] +  "So your Akan name is" + femaleAkanNames[dateEntered.getDate()];
}
}
