console.log(Akan-names)
//formula to determine day of month

//creating arrays for female and male Akan names and days of the week
  var days0fWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var maleAkanNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
  var femaleAkanNames=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
  let form=document.getElementById("form");
  form.addEventListener("Submit", (Event));{event.preventDefault();
}
gender = document.getElementById("Gender").value
    date= document.getElementById("date").value

    let yearOfBirth=date.getFullYear();
    let monthOfTheYear=date.getMonth();
    let day=daysOfWeek[date.getDay()];

    CC - century

 YY - yearOfBirth

 MM -  birthMonth

 DD - dayOfBirth

 mod - mod 

 days0fWeek= ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

 let dayOfBirth;
 
 if (dayOfTheWeek == 0 && gender == "female") {
    bornDay = "Saturday";
    akanName = femaleAkanNames[0];
} else if (dayOfTheWeek == 0 && gender == "male") {
    bornDay = "Saturday";
    akanName = maleAkanNames[0];


    if (dayOfTheWeek == 1 && gender == "female") {
        bornDay = "Sunday";
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        bornDay = "Sunday";
        akanName = maleAkanNames[1];


    if (dayOfTheWeek == 2 && gender == "female") {
        bornDay = "Monday";
        akanName = femaleAkanNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        bornDay = "Monday";
        akanName = maleAkanNames[2];

    if (dayOfTheWeek == 3 && gender == "female") {
        bornDay = "Tuesday";
        akanName = femaleAkanNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        bornDay = "Tuesday";
        akanName = maleAkanNames[3];

    if (dayOfTheWeek == 4 && gender == "female") {
        bornDay = "Wednesday";
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        bornDay = "Wednesday";
        akanName = maleAkanNames[4];

    if (dayOfTheWeek == 5 && gender == "female") {
        bornDay = "Thursday";
        akanName = femaleAkanNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        bornDay = "Thursday";
        akanName = maleAkanNames[5];

    if (dayOfTheWeek == 6 && gender == "female") {
        bornDay = "Friday";
        akanName = femaleAkanNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        bornDay = "Friday";
        akanName = maleAkanNames[6];
