console.log(Akan-names)
let form= document.getElementById("form");
  form.addEventListener("Submit", (e)) ; {e.preventDefault();
}
//formula to determine day of month

//creating arrays for female and male Akan names and days of the week
  var days0fWeek=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var maleAkanNames=['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
  var femaleAkanNames=['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

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

 days0fWeek= ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ;  7

 let dayOfBirth;
 
 if (daysOfWeek == 0 && gender == "female") {
    dayOfBirth = "Saturday";
    akanName = femaleAkanNames[0];
} else if (daysOfWeek == 0 && gender == "male") {
    dayOfBirth = "Saturday";
    akanName = maleAkanNames[0];
}

    if (daysOfWeek == 1 && gender == "female") {
        dayOfBirth = "Sunday";
        akanName = femaleAkanNames[1];
    } else if (daysOfWeek == 1 && gender == "male") {
        dayOfBirth = "Sunday";
        akanName = maleAkanNames[1];
    }

    if (daysOfWeek == 2 && gender == "female") {
        dayOfBirth = "Monday";
        akanName = femaleAkanNames[2];
    } else if (daysOfWeek == 2 && gender == "male") {
        dayOfBirth = "Monday";
        akanName = maleAkanNames[2];
    }
    if (daysOfWeek == 3 && gender == "female") {
        dayOfBirth = "Tuesday";
        akanName = femaleAkanNames[3];
    } else if (daysOfWeek == 3 && gender == "male") {
        dayOfBirth = "Tuesday";
        akanName = maleAkanNames[3];
    }
    if (daysOfWeek == 4 && gender == "female") {
        dayOfBirth = "Wednesday";
        akanName = femaleAkanNames[0];
    } else if (daysOfWeek == 4 && gender == "male") {
        dayOfBirth = "Wednesday";
        akanName = maleAkanNames[4];
    }
    if (daysOfWeek == 5 && gender == "female") {
        dayOfBirth = "Thursday";
        akanName = femaleAkanNames[5];
    } else if (daysOfWeek == 5 && gender == "male") {
        dayOfBirth = "Thursday";
        akanName = maleAkanNames[5];
    }
    if (daysOfWeek == 6 && gender == "female") {
        dayOfBirth = "Friday";
        akanName = femaleAkanNames[6];
    } else if (daysOfWeek == 6 && gender == "male") {
        dayOfBirth = "Friday";
        akanName = maleAkanNames[6];
    }
    let result = document.getElementById("reveal-result").innerHTML = "You were born on a " + dayOfBirth + " so your akan name is " + akanName + "!"
    document.getElementById("form").reset();
});